# 速買配 SmilePay 發票 SDK

提供 開立發票 / 開立折讓單 / 發票&折讓單-作廢/註銷/退回功能 等功能

詳情請參考[SDK 文件](default.md)以及[參數文件](modules.md)以及 jsDoc 的自動提示

## Installation

```bash
yarn add smilepay-invoice-sdk
```

## Example

```javascript
// ES6
import SmilePayInvoiceClient from "smilepay-invoice-sdk";
// ES5
// const SmilePayInvoiceClient = require("smilepay-invoice-sdk").default;

const client = new SmilePayInvoiceClient({
  Grvc: "SEI1000034",
  VerifyKey: "9D73935693EE0237FABA6AB744E48661",
  env: "sandbox",
});

// 開立B2C發票
const b2cResult = await client.issueInvoice({
  Name: "速買配",
  Phone: "0900000000",
  Email: "Test@testmailserver.net",
  Intype: "07",
  TaxType: 1,
  LoveKey: "",
  DonateMark: 0,
  Description: ["商品1", "商品2"],
  Quantity: [5, 8],
  UnitPrice: [10, 15],
  Unit: ["顆", "條"],
  Amount: [50, 120],
  AllAmount: 170,
  InvoiceDate: "2023/2/2",
  InvoiceTime: "15:33:33",
});

// 開立B2B發票
const b2bResult = await client.issueInvoice({
  CompanyName: "速買配",
  Buyer_id: "80129529",
  Phone: "0900000000",
  Email: "Test@testmailserver.net",
  Intype: "07",
  TaxType: 1,
  LoveKey: "",
  DonateMark: 0,
  Description: ["商品1", "商品2"],
  Quantity: [5, 8],
  UnitPrice: [10.5, 15.75],
  Unit: ["顆", "條"],
  Amount: [52.5, 126],
  AllAmount: 170,
  InvoiceDate: "2023/2/2",
  InvoiceTime: "15:33:33",
});

// 作廢發票
const cancelResult = await client.modifyInvoice({
  InvoiceNumber: b2cResult.InvoiceNumber,
  InvoiceDate: "2023/2/2",
  types: "Cancel",
  CancelReason: "測試取消",
});

// 開立折讓單
const allowanceResult = await client.issueAllowance({
  InvoiceNumber: b2bResult.InvoiceNumber,
  Description: ["商品1", "商品2"],
  Quantity: [5, 8],
  UnitPrice: [10, 15],
  Unit: ["顆", "條"],
  Amount: [50, 120],
  Tax: [2.5, 6],
  TaxType: 1,
});
```
