import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  private static lastId = 0;

  create(cat: CreateCatDto) {
    this.cats.push({ ...cat, id: ++CatsService.lastId });
  }

  findAll(query: ListAllEntities): Cat[] {
    return this.cats.slice(0, query.limit);
  }

  findOne(id: number): Cat {
    return this.cats.find((each) => each.id === id);
  }

  updateOne(id: number, updateCatDto: UpdateCatDto) {
    const index = this.cats.findIndex((each) => each.id === id);
    if (index === -1) {
      return;
    }
    this.cats[index] = {
      ...this.cats[index],
      name: updateCatDto.name,
      age: updateCatDto.age,
      breed: updateCatDto.breed,
    };
  }

  removeOne(id: number) {
    const index = this.cats.findIndex((each) => each.id === id);
    if (index === -1) {
      return;
    }
    this.cats.splice(index, 1);
  }
}
