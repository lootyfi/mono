import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ethers from 'ethers';
import { SiweMessage } from "siwe";

@Injectable()
export class SharedService {
  constructor(private readonly configService: ConfigService) {}
  async verifySignedMessage(message: string, signedMessage: string, nonce: string) {
    console.log("message", message);
    console.log("signedMessage", signedMessage);
    console.log("nonce", nonce);

    if (!signedMessage || !message) {
          return null;
        }
    try {
      console.log("process.env.NEXT_PUBLIC_SIGNIN_MESSAGE", process.env.NEXT_PUBLIC_SIGNIN_MESSAGE);
      console.log("JSON.parse(message)", JSON.parse(message));
      
          
          const siwe = new SiweMessage(JSON.parse(message));
          const result = await siwe.verify({
            signature: signedMessage,
            nonce: nonce,
          });
          console.log("result", result);
          

          if (!result.success) throw new Error("Invalid Signature");

          console.log("result.data", result.data.statement);
          console.log("process.env.NEXT_PUBLIC_SIGNIN_MESSAGE", process.env.NEXT_PUBLIC_SIGNIN_MESSAGE);
          
          

          if (result.data.statement !== 'Welcome to Looty.fi please sign in to continue')
            throw new Error("Statement Mismatch");

          // if (new Date(result.data.expirationTime as string) < new Date())
          //   throw new Error("Signature Already expired");
          console.log("Returning")
          return siwe.address;
        } catch (error) {
          console.log(error);
          return null;
        }
  }

  getAvaxProvider() {
    return new ethers.JsonRpcProvider(this.configService.get('AVAX_RPC_URL'));
  }
}
