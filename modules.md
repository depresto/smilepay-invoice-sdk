[smilepay-invoice-sdk](README.md) / Exports

# smilepay-invoice-sdk

## Table of contents

### Type Aliases

- [SmilePayIssueInvoiceParams](modules.md#smilepayissueinvoiceparams)
- [SmilePayIssueInvoiceResult](modules.md#smilepayissueinvoiceresult)
- [SmilePayModifyInvoiceParams](modules.md#smilepaymodifyinvoiceparams)
- [SmilePayModifyInvoiceResult](modules.md#smilepaymodifyinvoiceresult)
- [SmilePayRefundParams](modules.md#smilepayrefundparams)
- [SmilePayRefundResult](modules.md#smilepayrefundresult)

## Type Aliases

### SmilePayIssueInvoiceParams

Ƭ **SmilePayIssueInvoiceParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Address?` | `string` |
| `AllAmount` | `number` |
| `Amount` | `number`[] |
| `BondedAreaConfirm?` | ``1`` \| ``2`` \| ``3`` |
| `BuyerRemark?` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `Buyer_id?` | `string` |
| `CarrierID?` | `string` |
| `CarrierID2?` | `string` |
| `CarrierType?` | ``"EJ0113"`` \| ``"3J0002"`` \| ``"CQ0001"`` |
| `Certificate_Remark?` | `string` |
| `CompanyName?` | `string` |
| `CustomsClearanceMark?` | ``1`` \| ``2`` |
| `Description` | `string`[] |
| `DonateMark` | ``0`` \| ``1`` |
| `Email?` | `string` |
| `Facsimile?` | `string` |
| `FreeTaxSalesAmount?` | `number` |
| `GroupMark?` | ``"Y"`` |
| `Intype` | ``"07"`` \| ``"08"`` |
| `InvoiceDate` | `string` |
| `InvoiceNumber?` | `string` |
| `InvoiceTime` | `string` |
| `LoveKey?` | `string` |
| `Name?` | `string` |
| `Phone?` | `string` |
| `Quantity` | `number`[] |
| `RandomNumber?` | `string` |
| `Remark?` | `string`[] |
| `SalesAmount?` | `number` |
| `TaxAmount?` | `number` |
| `TaxType` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``9`` |
| `Unit?` | `string`[] |
| `UnitPrice` | `number`[] |
| `UnitTAX?` | (``"Y"`` \| ``"N"``)[] |
| `Visa_Last4?` | `string` |
| `ZeroTaxSalesAmount?` | `number` |
| `data_id?` | `string` |
| `orderid?` | `string` |

#### Defined in

index.ts:3

___

### SmilePayIssueInvoiceResult

Ƭ **SmilePayIssueInvoiceResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CarrierID` | `string` |
| `Desc` | `string` |
| `Grvc` | `string` |
| `InvoiceDate` | `string` |
| `InvoiceNumber` | `string` |
| `InvoiceTime` | `string` |
| `InvoiceType` | `string` |
| `RandomNumber` | `string` |
| `Status` | `string` |
| `data_id` | `string` |
| `orderno` | `string` |

#### Defined in

index.ts:46

___

### SmilePayModifyInvoiceParams

Ƭ **SmilePayModifyInvoiceParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AllowanceDate?` | `string` |
| `AllowanceNumber?` | `string` |
| `CancelReason?` | `string` |
| `InvoiceDate?` | `string` |
| `InvoiceNumber?` | `string` |
| `RejectReason?` | `string` |
| `Remark?` | `string` |
| `ReturnTaxDocumentNumber?` | `string` |
| `VoidReason?` | `string` |
| `types` | ``"Cancel"`` \| ``"Void"`` \| ``"Reject"`` \| ``"CancelAllowance"`` \| ``"StopProcessing"`` |

#### Defined in

index.ts:60

___

### SmilePayModifyInvoiceResult

Ƭ **SmilePayModifyInvoiceResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AllowanceNumber?` | `string` |
| `CancelDate?` | `string` |
| `CancelTime?` | `string` |
| `Desc` | `string` |
| `Grvc` | `string` |
| `InvoiceNumber?` | `string` |
| `RejectDate?` | `string` |
| `RejectTime?` | `string` |
| `Status` | `string` |
| `Types` | `string` |
| `VoidDate?` | `string` |
| `VoidTime?` | `string` |

#### Defined in

index.ts:72

___

### SmilePayRefundParams

Ƭ **SmilePayRefundParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AllowanceDate?` | `string` |
| `AllowanceNumber?` | `string` |
| `AllowanceType?` | ``1`` \| ``2`` |
| `Amount` | `number`[] |
| `Description` | `string`[] |
| `InvoiceNumber` | `string` |
| `Quantity` | `number`[] |
| `Tax` | `number`[] |
| `TaxType` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `Unit?` | `string`[] |
| `UnitPrice` | `number`[] |

#### Defined in

index.ts:87

___

### SmilePayRefundResult

Ƭ **SmilePayRefundResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AllowanceNumber` | `string` |
| `Desc` | `string` |
| `Grvc` | `string` |
| `InvoiceNumber` | `string` |
| `Status` | `string` |

#### Defined in

index.ts:101
