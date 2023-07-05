import { Injectable, Post } from '@nestjs/common';
import { BookDTO } from './book.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async create(data: BookDTO) {
    const bookExists = await this.prismaService.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (bookExists) {
      throw new Error('Book already exists');
    }
    const book = await this.prismaService.book.create({ data });
    return book;
  }

  async findAll() {
    return await this.prismaService.book.findMany();
  }

  async update(id: string, data: BookDTO) {
    const bookExists = await this.prismaService.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists');
    }

    return await this.prismaService.book.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const bookExists = await this.prismaService.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists');
    }

    return this.prismaService.book.delete({ where: { id } });
  }
}
