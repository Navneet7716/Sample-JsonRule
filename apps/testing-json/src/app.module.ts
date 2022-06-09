import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonEngineService } from './json-engine/json-engine.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JsonEngineService],
})
export class AppModule {}
