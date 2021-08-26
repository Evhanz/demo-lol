import {Controller, Get, Param } from "@nestjs/common";
import {LolService} from "../services/lol.service";
@Controller('lol')
export class LolController {
  constructor(private lolService: LolService) {}

  @Get('filter')
  getProductFilter() {
    return this.lolService.findAll();
  }
}
