import { PostsService } from './post.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all posts';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return 'This action returns one post';
  }

  @Post()
  async create(@Req() req, @Res() res, @Body() createPost: CreatePostDTO) {
    console.log(req);
    const post = await this.postsService.create(createPost);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'Post Created Successfully',
      data: { ...post },
    });
  }
}
