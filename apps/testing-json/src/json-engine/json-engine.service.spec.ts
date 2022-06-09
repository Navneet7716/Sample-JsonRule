import { Test, TestingModule } from '@nestjs/testing';
import { JsonEngineService } from './json-engine.service';

describe('JsonEngineService', () => {
  let service: JsonEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonEngineService],
    }).compile();

    service = module.get<JsonEngineService>(JsonEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
