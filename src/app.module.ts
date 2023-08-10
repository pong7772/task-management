import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import ormConfig from '../typeOrm.cofig';
// import functionMiddleware from './middleware/functionMiddleware';
import { classMiddleware } from './middleware/classMiddleware';
// import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TasksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
// implement middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(classMiddleware)
      // .forRoutes(TasksController);
      .forRoutes('*');
  }
}
