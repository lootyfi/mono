import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { getKeysContract, mintLootyKey } from '@org/avax';
import { ProjectService } from '../project/project.service';
import { BaseContract } from 'ethers';

@Injectable()
export class AvalancheService implements OnModuleInit {
  constructor(private projectService: ProjectService) {}

  private logger = new Logger(AvalancheService.name);
  async onModuleInit() {
    try {
      const projects = await this.projectService.getAllProjects();
      await Promise.all(
        projects.map(async (p) => {
          const contract = getKeysContract(
            p.keysContractAddress
          ) as unknown as BaseContract;
          contract.addListener('KeyMintedEvent', () => {});
        })
      );
    } catch (error) {
      this.logger.error(`Failed to init liteners`);
    }
  }
  async mintKey(projectId: string) {
    try {
      const project = await this.projectService.getProjectById(projectId);
      if (!project) throw new NotFoundException();
      const mintKey = await mintLootyKey(project.keysContractAddress);
      return { serializedTx: mintKey };
    } catch (error) {
      throw new error();
    }
  }
}
