import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);
    const { username, password } = createAuthDto;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
    });
    return await this.userRepository.save(user);
  }
  async signIn(createAuthDto: CreateAuthDto) {
    const { username, password } = createAuthDto;
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Password is incorrect');
    }
    const payload = { username: user.username, sub: user.id };
    const accessToken: string = await this.jwtService.sign(payload);
    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }

  async findAll() {
    const user = await this.userRepository.find();
    return user;
  }

  findOne(id: number) {
    const user = this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    const user = this.findOne(id);
    const newUser = { ...user, ...updateAuthDto };
    const updatedUser = this.userRepository.save(newUser);
    return updatedUser;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
