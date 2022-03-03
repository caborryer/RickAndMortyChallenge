import { Module } from '@nestjs/common';
import config from '../config';
import { ConnectionService } from './services/connection.service';

@Module({
    providers: [ConnectionService],
    exports: [ConnectionService]
})
export class ConnectionModule {}
