import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('🔐 Login attempt:', email);
    const user = await this.userService.findByEmail(email);
    if (!user) {
      console.log('❌ User not found:', email);
      throw new NotFoundException();
    }

    const same = await bcrypt.compare(password, user.password);
    if (same) {
      console.log('✅ Password matched for:', email);
      const { password, ...result } = user;
      return result;
    }
    console.log('❌ Wrong password for:', email);
    return null;
  }

  async login({ dataValues }) {
    const payload = {
      id: dataValues.id,
      username: dataValues.username,
      image: dataValues.image
    };
    return {
      statusCode: '200',
      access_token: this.jwtService.sign(payload)
    };
  }

  async register(userDoc: CreateUserDto): Promise<any> {
    console.log('📝 Registration attempt:', userDoc.email);
    const user = await this.userService.findByEmail(userDoc.email);
    if (user) {
      console.log('❌ User already exists:', userDoc.email);
      throw new ConflictException('User already exists.');
    }

    await this.userService.createUser(userDoc);
    console.log('✅ User created:', userDoc.email);
    return {
      statusCode: '201',
      message: 'User created successfully.'
    };
  }
}
