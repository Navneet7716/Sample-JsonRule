import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Facts } from './json-engine/facts.dto';
import { JsonEngineService } from './json-engine/json-engine.service';

@Controller()
export class AppController {
  Eligible: boolean;
  Message: string;

  constructor(
    private readonly appService: AppService,
    private readonly engineService: JsonEngineService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async getEligibility(@Body() facts: Facts): Promise<any> {
    try {
      let res: any = await this.engineService.getResults(facts);

      this.Eligible = res.almanac.ruleResults[0].result as boolean;

      if (this.Eligible) {
        this.Message = res.events[0].params.message;
      }else {
        this.Message = "Not Eligible"
      }

      return {
        eligible: this.Eligible,
        message: this.Message,
      };
    } catch (e) {
      console.log(e);

      return {
        message: 'Some error occured',
      };
    }
  }
}
