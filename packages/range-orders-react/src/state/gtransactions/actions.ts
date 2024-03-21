import { RangeOrderData } from "@gelatonetwork/range-orders-lib";
import { createAction } from "@reduxjs/toolkit";

export interface SerializableTransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  blockHash: string;
  transactionHash: string;
  blockNumber: number;
  status?: number;
}

export type TransactionType = "submission" | "cancellation" | "approval";

export const addTransaction = createAction<{
  chainId: number;
  hash: string;
  from: string;
  type: TransactionType;
  order?: RangeOrderData;
  approval?: { tokenAddress: string; spender: string };
  summary?: string;
}>("rtransactions/addTransaction");
export const clearAllTransactions = createAction<{ chainId: number }>(
  "rtransactions/clearAllTransactions"
);
export const finalizeTransaction = createAction<{
  chainId: number;
  hash: string;
  receipt: SerializableTransactionReceipt;
}>("rtransactions/finalizeTransaction");
export const checkedTransaction = createAction<{
  chainId: number;
  hash: string;
  blockNumber: number;
}>("rtransactions/checkedTransaction");
