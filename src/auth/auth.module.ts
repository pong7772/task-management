import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // [[User]] is the same as [User] or [[User, User2, User3
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
