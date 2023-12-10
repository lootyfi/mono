import { BadRequestException, Injectable } from '@nestjs/common';
import { mintLootyKey } from '@org/avax';
@Injectable()
export class AvalancheService {
  async mintKey(projectId: string) {
    try {
      const mintKey = await mintLootyKey('');
      return { serializedTx: mintKey };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
