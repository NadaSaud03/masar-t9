import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GreetingsController } from './greetings/greetings.controller';

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'masar-db',
    autoLoadEntities: true,
    entities: [entitiesPath],
    synchronize: false,
    logging: false,
  }), UserModule],
  controllers: [AppController, GreetingsController],
  providers: [AppService],
})
//j
export class AppModule {}
