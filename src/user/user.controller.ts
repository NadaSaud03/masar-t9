import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly dataSource: DataSource) {}

  @Post('/create')
  async create(@Body() body) {
    const userRepo = this.dataSource.getRepository(User);
    const user = new User();
    const {fullName, age} = body;

    if (!fullName || !age) {
      throw new HttpException(
        'message',
        HttpStatus.BAD_REQUEST
      );
    }

    user.fullName = fullName;
    user.age = age;

    await userRepo.save(user);

    return {message: 'User created successfully', user: user};
  }

  @Get()
  async findAll() {
    const userRepo = this.dataSource.getRepository(User);
    const users = await userRepo.find();
    return {users: users};
  }

}
