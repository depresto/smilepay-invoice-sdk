import SmilePayInvoiceClient from "./smilepay.invoice.client";

describe("issueInvoice", () => {
  test("issueInvoice for B2C", async () => {
    // Create a new SmilePayInvoiceClient and issue an invoice
    const client = new SmilePayInvoiceClient({
      Grvc: "SEI1000034",
      VerifyKey: "9D73935693EE0237FABA6AB744E48661",
      env: "sandbox",
    });

    const result = await client.issueInvoice({
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

    expect(result.Status).toBe("0");
  });

  test("issueInvoice for B2B", async () => {
    // Create a new SmilePayInvoiceClient and issue an invoice
    const client = new SmilePayInvoiceClient({
      Grvc: "SEI1000034",
      VerifyKey: "9D73935693EE0237FABA6AB744E48661",
      env: "sandbox",
    });

    const result = await client.issueInvoice({
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
      UnitPrice: [10, 15],
      Unit: ["顆", "條"],
      Amount: [50, 120],
      AllAmount: 170,
      InvoiceDate: "2023/2/2",
      InvoiceTime: "15:33:33",
    });

    expect(result.Status).toBe("0");
  });
});

describe("modifyInvoice", () => {
  test("modifyInvoice for B2C", async () => {
    // Create a new SmilePayInvoiceClient and issue an invoice
    const client = new SmilePayInvoiceClient({
      Grvc: "SEI1000034",
      VerifyKey: "9D73935693EE0237FABA6AB744E48661",
      env: "sandbox",
    });

    const invoiceResult = await client.issueInvoice({
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

    const result = await client.modifyInvoice({
      InvoiceNumber: invoiceResult.InvoiceNumber,
      InvoiceDate: "2023/2/2",
      types: "Cancel",
      CancelReason: "測試取消",
    });

    expect(result.Status).toBe("-2008");
  });
});

describe("createRefund", () => {
  test("createRefund for B2C", async () => {
    // Create a new SmilePayInvoiceClient and issue an invoice
    const client = new SmilePayInvoiceClient({
      Grvc: "SEI1000034",
      VerifyKey: "9D73935693EE0237FABA6AB744E48661",
      env: "sandbox",
    });

    const invoiceResult = await client.issueInvoice({
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

    const result = await client.issueAllowance({
      InvoiceNumber: invoiceResult.InvoiceNumber,
      Description: ["商品1", "商品2"],
      Quantity: [5, 8],
      UnitPrice: [10, 15],
      Unit: ["顆", "條"],
      Amount: [50, 120],
      Tax: [2.5, 6],
      TaxType: 1,
    });

    expect(result.Status).toBe("-1002");
  });
});
