import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '../typeOrm.cofig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
