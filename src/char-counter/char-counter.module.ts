import { Module } from '@nestjs/common';
import { CharCounterService } from './services/char-counter.service';
import { CharCounterController } from './controllers/char-counter.controller';
import { ConnectionModule } from '../connection/connection.module';

@Module({
  providers: [CharCounterService],
  controllers: [CharCounterController],
  imports: [ConnectionModule]
})
export class CharCounterModule {}
