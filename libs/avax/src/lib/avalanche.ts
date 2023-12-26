import ethers from 'ethers';
import keysAbi from './abi/LootyfiKeys.json';
import boxesAbi from './abi/Boxes.json';
import { Boxes, LootyfiKeys } from './types';

export function getKeysContract(address: string) {
  return new ethers.Contract(address, keysAbi.abi) as unknown as LootyfiKeys;
}

export function getBoxesContract(address: string) {
  return new ethers.Contract(address, boxesAbi.abi) as unknown as Boxes;
}
