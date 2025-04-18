import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs@common';
import { Prisma, Post } from '@prisma/client';


@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService)

    async post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
        });
    }

    async posts(params: {
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[] | null>{
        const { orderBy } = params;
        return this.prisma.post.findMany({
            orderBy,
        });
    }

    async createPost(data: Prisma.PostCreateInput): Promise<Post>{
        return this.prisma.post.create({
            data,
        });
    }

    async updatePost(params: {
        data: Prisma.PostUpdateInput, where: Prisma.PostWhereUniqueInput
    }): Prisma<Post>{
        return this.prisma.post.update({
            where,
            data,
        });
    }

    async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post>{
        return  this.prisma.post.delete({
            where,
        });
    }

}
