/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class ServicesService {
  async create(user: CreateUserDto) {
    return await prisma.users.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
  }

  async findAllUsers() {
    return await prisma.users.findMany();
  }

  async findAllDragonBall() {
    try {
      const res = await fetch('https://dragonball-api.com/api/characters');
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(`Error while fetch dragon ball characters: ${error}`);
    }
  }

  async findRandomDogImage() {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(`Error while fetch while fetch random dog image: ${error}`);
    }
  }

  async findRandomCatImage() {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const response = await res.json();
      console.log('a');
      return response;
    } catch (error) {
      console.log(`Error while fetch while fetch random cat image: ${error}`);
    }
  }
}
