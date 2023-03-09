import { Module } from '@nestjs/common';
import { PostsModule } from './components/posts/post.module';

@Module({
  imports: [PostsModule],
})
export class AppModule {}
