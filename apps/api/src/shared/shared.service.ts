import { Injectable } from '@nestjs/common';
import ethers from 'ethers';
@Injectable()
export class SharedService {
  verifySignedMessage(message: string, signature: string, wallet: string) {
    const signerWallet = ethers.verifyMessage(message, signature);

    return signerWallet == wallet;
  }
}
