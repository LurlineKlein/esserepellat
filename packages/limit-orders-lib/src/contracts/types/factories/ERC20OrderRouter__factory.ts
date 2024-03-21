/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ERC20OrderRouter,
  ERC20OrderRouterInterface,
} from "../ERC20OrderRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGelatoPineCore",
        name: "_gelatoPineCore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "witness",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "secret",
        type: "bytes32",
      },
    ],
    name: "DepositToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        internalType: "address",
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_witness",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_secret",
        type: "bytes32",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gelatoPineCore",
    outputs: [
      {
        internalType: "contract IGelatoPineCore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC20OrderRouter__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20OrderRouterInterface {
    return new utils.Interface(_abi) as ERC20OrderRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20OrderRouter {
    return new Contract(address, _abi, signerOrProvider) as ERC20OrderRouter;
  }
}
