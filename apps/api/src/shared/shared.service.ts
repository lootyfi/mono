import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ethers from 'ethers';
import { SiweMessage } from "siwe";

@Injectable()
export class SharedService {
  constructor(private readonly configService: ConfigService) {}
  async verifySignedMessage(message: string, signedMessage: string, nonce: string) {
    if (!signedMessage || !message) {
          return null;
        }
    try {        
          const siwe = new SiweMessage(JSON.parse(message));
          const result = await siwe.verify({
            signature: signedMessage,
            nonce: nonce,
          });          

          if (!result.success) throw new Error("Invalid Signature");  

          if (result.data.statement !== 'Welcome to Looty.fi please sign in to continue')
            throw new Error("Statement Mismatch");

          // if (new Date(result.data.expirationTime as string) < new Date())
          //   throw new Error("Signature Already expired");
          return siwe.address;
        } catch (error) {
          return null;
        }
  }

  getAvaxProvider() {
    return new ethers.JsonRpcProvider(this.configService.get('AVAX_RPC_URL'));
  }
}
