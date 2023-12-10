import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface KeysCallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface KeysSendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface KeysEstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface KeysMethodPayableReturnContext {
  send(options: KeysSendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: KeysSendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: KeysEstimateGasOptions): Promise<number>;
  estimateGas(
    options: KeysEstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface KeysMethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: KeysCallOptions): Promise<TCallReturn>;
  call(
    options: KeysCallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface KeysMethodReturnContext
  extends KeysMethodPayableReturnContext {}

export type KeysContractContext = Web3ContractContext<
  LootyfiKeys,
  LootyfiKeysMethodNames,
  LootyfiKeysEventsContext,
  LootyfiKeysEvents
>;
export type LootyfiKeysEvents =
  | 'Approval'
  | 'ApprovalForAll'
  | 'BatchMetadataUpdate'
  | 'MetadataUpdate'
  | 'OwnershipTransferred'
  | 'Transfer';
export interface LootyfiKeysEventsContext {
  Approval(
    parameters: {
      filter?: {
        owner?: string | string[];
        approved?: string | string[];
        tokenId?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  ApprovalForAll(
    parameters: {
      filter?: { owner?: string | string[]; operator?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  BatchMetadataUpdate(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MetadataUpdate(
    parameters: {
      filter?: {};
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
  Transfer(
    parameters: {
      filter?: {
        from?: string | string[];
        to?: string | string[];
        tokenId?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type LootyfiKeysMethodNames =
  | 'new'
  | 'approve'
  | 'balanceOf'
  | 'burnToken'
  | 'flipSale'
  | 'getApproved'
  | 'getMintedCount'
  | 'isApprovedForAll'
  | 'mintLootyfiKey'
  | 'name'
  | 'owner'
  | 'ownerOf'
  | 'renounceOwnership'
  | 'royaltyInfo'
  | 'safeTransferFrom'
  | 'safeTransferFrom'
  | 'saleIsActive'
  | 'setApprovalForAll'
  | 'setMintConfiguration'
  | 'supportsInterface'
  | 'symbol'
  | 'tokenURI'
  | 'transferFrom'
  | 'transferOwnership'
  | 'withdraw';
export interface ApprovalEventEmittedResponse {
  owner: string;
  approved: string;
  tokenId: string;
}
export interface ApprovalForAllEventEmittedResponse {
  owner: string;
  operator: string;
  approved: boolean;
}
export interface BatchMetadataUpdateEventEmittedResponse {
  _fromTokenId: string;
  _toTokenId: string;
}
export interface MetadataUpdateEventEmittedResponse {
  _tokenId: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  tokenId: string;
}
export interface RoyaltyInfoResponse {
  result0: string;
  result1: string;
}
export interface KeyConfigurationRequest {
  uri: string;
  keyType: string | number;
}
export interface LootyfiKeys {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _collectionName Type: string, Indexed: false
   * @param _collectionSymbol Type: string, Indexed: false
   */
  'new'(
    _collectionName: string,
    _collectionSymbol: string
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  approve(to: string, tokenId: string): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  balanceOf(owner: string): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  burnToken(tokenId: string): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  flipSale(): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getApproved(tokenId: string): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getMintedCount(): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  isApprovedForAll(
    owner: string,
    operator: string
  ): KeysMethodConstantReturnContext<boolean>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  mintLootyfiKey(): KeysMethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  ownerOf(tokenId: string): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   * @param salePrice Type: uint256, Indexed: false
   */
  royaltyInfo(
    tokenId: string,
    salePrice: string
  ): KeysMethodConstantReturnContext<RoyaltyInfoResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: string
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: string,
    data: string | number[]
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  saleIsActive(): KeysMethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param approved Type: bool, Indexed: false
   */
  setApprovalForAll(
    operator: string,
    approved: boolean
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _startMintPrice Type: uint256, Indexed: false
   * @param _bidIncrease Type: uint256, Indexed: false
   * @param _totalSupply Type: uint256, Indexed: false
   * @param keyConfiguration Type: tuple[], Indexed: false
   * @param _endsAt Type: uint256, Indexed: false
   * @param _royaltyDestination Type: address, Indexed: false
   * @param _feeNumerator Type: uint96, Indexed: false
   */
  setMintConfiguration(
    _startMintPrice: string,
    _bidIncrease: string,
    _totalSupply: string,
    keyConfiguration: KeyConfigurationRequest[],
    _endsAt: string,
    _royaltyDestination: string,
    _feeNumerator: string
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param interfaceId Type: bytes4, Indexed: false
   */
  supportsInterface(
    interfaceId: string | number[]
  ): KeysMethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  tokenURI(tokenId: string): KeysMethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: string
  ): KeysMethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): KeysMethodReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  withdraw(): KeysMethodPayableReturnContext;
}
