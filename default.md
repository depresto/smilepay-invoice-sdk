# Class: SmilePayInvoiceClient

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [Grvc](default.md#grvc)
- [VerifyKey](default.md#verifykey)

### Methods

- [createRefund](default.md#createrefund)
- [issueInvoice](default.md#issueinvoice)
- [modifyInvoice](default.md#modifyinvoice)
- [parseApiResult](default.md#parseapiresult)

## Constructors

### constructor

• **new default**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.Grvc` | `string` |
| `params.VerifyKey` | `string` |
| `params.env` | ``"sandbox"`` \| ``"production"`` |

#### Defined in

smilepay.invoice.client.ts:17

## Properties

### Grvc

• **Grvc**: `string`

#### Defined in

smilepay.invoice.client.ts:13

___

### VerifyKey

• **VerifyKey**: `string`

#### Defined in

smilepay.invoice.client.ts:14

___

### apiEndpoint

• **apiEndpoint**: `string`

#### Defined in

smilepay.invoice.client.ts:15

## Methods

### createRefund

▸ **createRefund**(`params`): `Promise`<`SmilePayRefundResult`\>

開立折讓單

折讓單資訊

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `SmilePayRefundParams` |

#### Returns

`Promise`<`SmilePayRefundResult`\>

#### Defined in

smilepay.invoice.client.ts:269

___

### issueInvoice

▸ **issueInvoice**(`params`): `Promise`<`SmilePayIssueInvoiceResult`\>

開立發票

發票資訊

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `SmilePayIssueInvoiceParams` |

#### Returns

`Promise`<`SmilePayIssueInvoiceResult`\>

#### Defined in

smilepay.invoice.client.ts:157

___

### modifyInvoice

▸ **modifyInvoice**(`params`): `Promise`<`SmilePayModifyInvoiceResult`\>

發票&折讓單-作廢/註銷/退回

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `SmilePayModifyInvoiceParams` |

#### Returns

`Promise`<`SmilePayModifyInvoiceResult`\>

#### Defined in

smilepay.invoice.client.ts:210
