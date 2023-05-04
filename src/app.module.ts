import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './components/posts/post.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    DatabaseModule,
    PostsModule,
  ],
})
export class AppModule {}
