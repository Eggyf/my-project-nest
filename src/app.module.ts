import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'Abdelfregel',
    username: 'postgres',
    entities: [User],
    database: 'postgres',
    synchronize: true,
    logging: true,
    autoLoadEntities: true,
  }),
    UsersModule, DatabaseModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
