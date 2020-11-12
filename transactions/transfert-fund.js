const { transactions, codec, cryptography } = require("@liskhq/lisk-client");

const { getFullAssetSchema, calcMinTxFee } = require("./common");

const { fetchAccountInfo } = require("./api");

const transferAssetSchema = {
  $id: "lisk/transfer-asset",
  title: "Transfer transaction asset",
  type: "object",
  required: ["amount", "recipientAddress", "data"],
  properties: {
    amount: {
      dataType: "uint64",
      fieldNumber: 1,
    },
    recipientAddress: {
      dataType: "bytes",
      fieldNumber: 2,
      minLength: 20,
      maxLength: 20,
    },
    data: {
      dataType: "string",
      fieldNumber: 3,
      minLength: 0,
      maxLength: 64,
    },
  },
};

const transfer = async ({
  recipientAddress,
  amount,
  passphrase,
  fee,
  networkIdentifier,
  minFeePerByte,
}) => {
  const { publicKey } = cryptography.getPrivateAndPublicKeyFromPassphrase(
    passphrase
  );
  const address = cryptography.getAddressFromPassphrase(passphrase);
  const {
    sequence: { nonce },
  } = await fetchAccountInfo(address.toString("hex"));

  const { id, ...rest } = transactions.signTransaction(
    transferAssetSchema,
    {
      moduleID: 2,
      assetID: 0,
      nonce: BigInt(nonce),
      fee: BigInt(transactions.convertLSKToBeddows(fee)),
      senderPublicKey: publicKey,
      asset: {
        amount: BigInt(transactions.convertLSKToBeddows(amount)),
        recipientAddress: Buffer.from(recipientAddress, "hex"),
        data: "",
      },
    },
    Buffer.from(networkIdentifier, "hex"),
    passphrase
  );

  return {
    id: id.toString("hex"),
    tx: codec.codec.toJSON(getFullAssetSchema(transferAssetSchema), rest),
    minFee: calcMinTxFee(transferAssetSchema, minFeePerByte, rest),
  };
};

module.exports = {transferAssetSchema:transferAssetSchema, transfer:transfer};