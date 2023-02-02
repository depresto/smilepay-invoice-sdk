import SmilePayInvoiceClient from "./smilepay.invoice.client";

export type SmilePayIssueInvoiceParams = {
  InvoiceNumber?: string;
  RandomNumber?: string;
  InvoiceDate: string;
  InvoiceTime: string;
  Intype: "07" | "08";
  TaxType: 1 | 2 | 3 | 4 | 9;
  BuyerRemark?: 1 | 2 | 3 | 4;
  CustomsClearanceMark?: 1 | 2;
  GroupMark?: "Y";
  BondedAreaConfirm?: 1 | 2 | 3;
  DonateMark: 0 | 1;
  LoveKey?: string;
  Visa_Last4?: string;
  data_id?: string;
  orderid?: string;
  Certificate_Remark?: string;

  Description: string[];
  Quantity: number[];
  UnitPrice: number[];
  UnitTAX?: ("Y" | "N")[];
  Unit?: string[];
  Remark?: string[];
  Amount: number[];
  AllAmount: number;
  SalesAmount?: number;
  FreeTaxSalesAmount?: number;
  ZeroTaxSalesAmount?: number;
  TaxAmount?: number;

  Buyer_id?: string;
  CompanyName?: string;
  Name?: string;
  Phone?: string;
  Facsimile?: string;
  Email?: string;
  Address?: string;
  CarrierType?: "EJ0113" | "3J0002" | "CQ0001";
  CarrierID?: string;
  CarrierID2?: string;
};

export type SmilePayIssueInvoiceResult = {
  Status: string;
  Desc: string;
  Grvc: string;
  orderno: string;
  data_id: string;
  InvoiceNumber: string;
  RandomNumber: string;
  InvoiceDate: string;
  InvoiceTime: string;
  InvoiceType: string;
  CarrierID: string;
};

export type SmilePayModifyInvoiceParams = {
  InvoiceNumber?: string;
  InvoiceDate?: string;
  AllowanceNumber?: string;
  AllowanceDate?: string;
  types: "Cancel" | "Void" | "Reject" | "CancelAllowance" | "StopProcessing";
  CancelReason?: string;
  ReturnTaxDocumentNumber?: string;
  VoidReason?: string;
  RejectReason?: string;
  Remark?: string;
};
export type SmilePayModifyInvoiceResult = {
  Status: string;
  Desc: string;
  Types: string;
  Grvc: string;
  InvoiceNumber?: string;
  AllowanceNumber?: string;
  CancelDate?: string;
  CancelTime?: string;
  VoidDate?: string;
  VoidTime?: string;
  RejectDate?: string;
  RejectTime?: string;
};

export type SmilePayRefundParams = {
  InvoiceNumber: string;
  AllowanceNumber?: string;
  AllowanceDate?: string;
  AllowanceType?: 1 | 2;

  Description: string[];
  Quantity: number[];
  UnitPrice: number[];
  Unit?: string[];
  Amount: number[];
  Tax: number[];
  TaxType: 1 | 2 | 3 | 4;
};
export type SmilePayRefundResult = {
  Status: string;
  Desc: string;
  Grvc: string;
  InvoiceNumber: string;
  AllowanceNumber: string;
};

export default SmilePayInvoiceClient
