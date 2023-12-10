import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ethers from 'ethers';
@Injectable()
export class SharedService {
  constructor(private readonly configService: ConfigService) {}
  verifySignedMessage(message: string, signature: string, wallet: string) {
    const signerWallet = ethers.verifyMessage(message, signature);

    return signerWallet == wallet;
  }

  getAvaxProvider() {
    return new ethers.JsonRpcProvider(this.configService.get('AVAX_RPC_URL'));
  }
}
