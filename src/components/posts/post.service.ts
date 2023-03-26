import { CreatePostDTO } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDTO: CreatePostDTO) {
    const CreatePostData: any = {
      ...createPostDTO,
    };

    const post = await this.postRepository.save(CreatePostData);
    return post.id;
  }

  listAll() {
    return this.postRepository
      .createQueryBuilder('posts')
      .select(['posts.id', 'posts.post_name'])
      .getMany();
  }
}
