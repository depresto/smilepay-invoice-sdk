import fetch from "node-fetch";
import { xml2json } from "./helper";
import {
  SmilePayIssueInvoiceParams,
  SmilePayIssueInvoiceResult,
  SmilePayModifyInvoiceParams,
} from ".";

class SmilePayInvoiceClient {
  Grvc: string;
  VerifyKey: string;
  apiEndpoint: string;

  constructor(params: {
    Grvc: string;
    VerifyKey: string;
    env: "sandbox" | "production";
  }) {
    this.Grvc = params.Grvc;
    this.VerifyKey = params.VerifyKey;

    const dryRun = params.env === "sandbox";
    this.apiEndpoint =
      dryRun === true
        ? "https://ssl.smse.com.tw/api_test"
        : "https://ssl.smse.com.tw/api";
  }

  /**
   * 開立發票
   *
   * 發票資訊
   * @param {SmilePayInvoiceParams} invoice 
   *  發票號碼 英文(2)+數字(8)共10碼 不可有符號
   *  營業人自行管理字軌時使用 如需了解,請與速買配聯繫
   * @param invoice.RandomNumber 
   *  隨機碼 4字元(數字)
   *  營業人自行管理字軌時使用 如需了解,請與速買配聯繫
   * @param invoice.InvoiceDate 
   *  開立發票日期 (YYYY/MM/DD) / 若不填寫則用使用當下時間
   *  B2C發票僅能開立48小時之內 B2B發票僅能開立168小時之內
   * @param invoice.InvoiceTime 
   *  開立發票時間 (HH:MM:SS)
   * @param invoice.Intype 
      課稅別
      07：一般稅額計算之電子發票
      08：特種稅額計算之電子發票
   * @param invoice.TaxType 
      稅別
      1：應稅
      2：零稅率
      3：免稅
      4：應稅(特種稅率)
      9：混合應稅與免稅(限收銀機發票無法分辨時使用)
   * @param invoice.BuyerRemark 
      買受人註記 可保留空白
      1：得抵扣之進貨及費
      2：得抵扣之固定資
      3：不得抵扣之進貨及費用
      4：不得抵扣之固定資口
   * @param invoice.CustomsClearanceMark 
      通關方式註記 可保留空白
      1：非經海關出口
      2：經海關出口
   * @param invoice.GroupMark 
      彙開註記 Y 可保留空白 如為彙開發票再填入
   * @param invoice.BondedAreaConfirm 
      買受人簽署適用零稅率註記 可保留空白
      1：買受人為保稅區營業人
      2：買受人為遠洋漁業營業人
      3：買受人為自由貿易港區營業人
   * @param invoice.DonateMark 
      捐贈
      1：捐贈
      0：不捐贈
      有Buyer_id時,必須為0
      捐贈時載具類型(CarrierType)不可填入
   * @param invoice.LoveKey 
      愛心碼 DonateMark為1,此處不可為空
   * @param invoice.Visa_Last4 
   *  信用卡末四碼 如為刷卡交易，請填入卡號末四碼
   * @param invoice.data_id 
   *  自訂發票編號 如該號碼已開立過發票，將無法重複開立，除非發票作廢／退回 檢查範圍為相同期別的發票
   * @param invoice.orderid 
   *  自訂號碼 營業人自訂使用
   * @param invoice.Certificate_Remark 
   *  發票證明聯備註	呈現在證明聯上
   * 
   * 商品明細
   * 除總金額(AllAmount)/單價含稅(UnitTAX)參數外均以【　|　】(半形)符號區隔，並依照商品明細排列，各項總數必須相同
   * @param invoice.Description 
   *  商品明細 請勿填入符號，每項品名最多256個字
   * @param invoice.Quantity 
   *  數量明細 純數字，必須大於0
   * @param invoice.UnitPrice 
   *  單價明細 純數字，必須大於0 透過單價含稅(UnitTAX)指定金額含稅或未稅價
   * @param {'Y' | 'N'} invoice.UnitTAX 
   *  單價含稅 Y：單價含稅 N：單價未稅
   * @param invoice.Unit 
   *  單位明細 請勿填入符號，每項單位最多6個字
   * @param invoice.Remark 
   *  商品備註明細 請勿填入符號，每項內容最多40個字
   * @param invoice.Amount 
   *  各明細總額 由每項【數量*單價】計算 純數字，可以小於0
   * @param invoice.AllAmount 
   *  總金額(含稅)
   *  由各明細總額(Amount)合計 金額必須含稅 純數字，不可小於0
   * @param invoice.SalesAmount 
      銷售額
      課稅別(TaxType)【9：混合稅率】B2C/B2B發票
      營業人必須提供含稅銷售額
      【1：應稅】B2B發票填入未稅銷售額
   * @param invoice.FreeTaxSalesAmount
      免稅銷售額	
      僅在課稅別(TaxType)為【9：混合稅率】
      營業人必須提供銷售額金額
   * @param invoice.ZeroTaxSalesAmount
      零稅率銷售額
   * @param invoice.TaxAmount
      稅金
      僅在B2B發票時才會生效
      營業人自行計算發票稅金
      純數字，整數，不可小於０

   * 買受人資訊
   * @param invoice.Buyer_id
      買受人統編
      有值：開立B2B發票
      空值：開立B2C發票
   * @param invoice.CompanyName
   *  買受人公司名稱 請勿填入符號
   * @param invoice.Name
   *  買受人姓名 請勿填入符號
   * @param invoice.Phone
   *  買受人電話 純數字，請勿填入符號
   * @param invoice.Facsimile
   *  買受人傳真 純數字，請勿填入符號
   * @param invoice.Email
   *  買受人電子信箱
   * @param invoice.Address
   *  買受人地址
   * @param invoice.CarrierType
      買受人載具類型
      速買配載具:EJ0113
      手機條碼:3J0002
      自然人憑證:CQ0001
   * @param invoice.CarrierID
   *  載具ID明碼 當載具類型(CarrierType)有值時，此處不可為空
   * @param invoice.CarrierID2
   *  載具ID暗碼 當載具類型(CarrierType)有值時，此處不可為空

   * @returns
   */
  async issueInvoice(invoice: SmilePayIssueInvoiceParams) {
    const params = new URLSearchParams();
    params.append("Grvc", this.Grvc);
    params.append("Verify_key", this.VerifyKey);

    // Use SmilePayIssueInvoiceParams to generate params
    for (const key in invoice) {
      const invoiceValue = invoice[key as keyof SmilePayIssueInvoiceParams];
      if (invoiceValue) {
        params.append(key, invoiceValue.toString());
      }
    }

    const response = await fetch(`${this.apiEndpoint}/SPEinvoice_Storage.asp`, {
      method: "POST",
      body: params,
    });

    const data = await response.text();
    let result = {};
    try {
      result = JSON.parse(xml2json(data, ""));
    } catch (error) {
      console.error(error);
    }
    return result as SmilePayIssueInvoiceResult;
  }

  /**
   * 發票&折讓單-作廢/註銷/退回
   * @param params.InvoiceNumber 發票號碼
   * @param params.InvoiceDate 發票日期
   * @param params.AllowanceNumber 折讓單號碼
   * @param params.AllowanceDate 折讓單日期
   * @param {'Cancel' | 'Void' | 'Reject' | 'CancelAllowance' | 'StopProcessing'} params.types 
   *  服務類型
   *  Cancel：作廢發票
      Void：註銷發票
      Reject：退回發票
      CancelAllowance：作廢折讓單
      StopProcessing：取消執行 停止作廢/註銷/退回作業並返回先前狀態，如果大平台已接收，將無法執行。 限發票才能使用
   * @param params.CancelReason 作廢原因
   * @param params.VoidReason 
   *  註銷原因
   *  註銷發票實際原因
   * @param params.RejectReason 
   *  退回原因
   *  註銷發票實際原因
   * @param params.ReturnTaxDocumentNumber 
   *  專案作廢核准文號
   *  可保留空白
   *  如有【專案作廢核准文號】請填入
   * @param params.Remark 備註
   */
  async modifyInvoice(params: SmilePayModifyInvoiceParams) {}
}

export default SmilePayInvoiceClient;
