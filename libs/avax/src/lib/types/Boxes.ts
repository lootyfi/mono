import BN from 'bn.js';
import BigNumber from 'bignumber.js';

import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface BoxesCallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface BoxesEstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: unknown) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: BoxesEstimateGasOptions): Promise<number>;
  estimateGas(
    options: BoxesEstimateGasOptions,
    callback: (error: Error, result: unknown) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface BoxesMethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: BoxesCallOptions): Promise<TCallReturn>;
  call(
    options: BoxesCallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}
export interface BoxOpenedEventEmittedResponse {
  receiver: string;
  burnedTokenId: string;
  mintedBoxId: string;
}
export type BoxesContractContext = Web3ContractContext<
  Boxes,
  BoxesMethodNames,
  BoxesEventsContext,
  BoxesEvents
>;
export type BoxesEvents = 'OwnershipTransferred' | 'BoxOpened';
export interface BoxesEventsContext {
  BoxOpened(
    parameters: {
      filter?: unknown;
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OwnershipTransferred(
    parameters: {
      filter?: {
        previousOwner?: string | string[];
        newOwner?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type BoxesMethodNames =
  | 'new'
  | 'balanceOf'
  | 'flipSale'
  | 'getUserTokens'
  | 'mintBox'
  | 'owner'
  | 'renounceOwnership'
  | 'transferOwnership';
export interface KeysOwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface Boxes {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param keysContractAddress Type: address, Indexed: false
   */
  'new'(keysContractAddress: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   */
  balanceOf(user: string): BoxesMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  flipSale(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   */
  getUserTokens(user: string): BoxesMethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param receiver Type: address, Indexed: false
   * @param keyTokenId Type: uint256, Indexed: false
   * @param boxTokenId Type: uint256, Indexed: false
   */
  mintBox(
    receiver: string,
    keyTokenId: string,
    boxTokenId: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): BoxesMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): MethodReturnContext;
}
