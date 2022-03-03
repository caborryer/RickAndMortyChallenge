import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConnectionService } from './connection/services/connection.service';
import { ConnectionModule } from './connection/connection.module';
import { CharCounterModule } from './char-counter/char-counter.module';

@Module({
  imports: [ConnectionModule, CharCounterModule],
  controllers: [AppController],
  providers: [ConnectionService],
})
export class AppModule {}
