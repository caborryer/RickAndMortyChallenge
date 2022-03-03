import { Controller, Get } from '@nestjs/common';
import { CharCounterService } from '../services/char-counter.service';

@Controller('char-counter')
export class CharCounterController {
    constructor(private readonly charCounterService: CharCounterService) {}

    @Get()
    getAll() {
        return this.charCounterService.process()    
  }
}
