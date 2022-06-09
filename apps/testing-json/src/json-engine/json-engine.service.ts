import { Injectable } from '@nestjs/common';
import engine from './EngineConfig';
import { Facts } from './facts.dto';


@Injectable()
export class JsonEngineService {


    async getResults(facts: Facts) {
        return await engine.run(facts)
    }

}
