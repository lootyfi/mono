import { getKeysContract } from '../avalanche';

export async function mintLootyKey(contractAddress: string) {
  const keysContract = getKeysContract(contractAddress);

  const transaction = keysContract.mintLootyfiKey();

  const encodedTransaction = transaction.encodeABI();

  return encodedTransaction;
}

export async function getUserBalance(
  contractAddress: string,
  userAddress: string
) {
  const keysContract = getKeysContract(contractAddress);
  const balance = await keysContract.balanceOf(userAddress).call();

  return Number(balance);
}

export async function getMintedCount(contractAddress: string) {
  const keysContract = getKeysContract(contractAddress);

  return Number(keysContract.getMintedCount().call());
}

export async function getPriceConfig(contractAddress: string) {
  const keysContract = getKeysContract(contractAddress);
  const { result0, result1 } = await keysContract.getPriceConfig().call();

  return [result0, result1];
}
