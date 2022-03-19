import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { RequestBodyValidationPipePipe } from './pipes/request-body-validation-pipe.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(RequestBodyValidationPipePipe) createCatDto: CreateCatDto) {
    console.log({ createCatDto: createCatDto });
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities): Cat[] {
    console.log(`This action returns all cats (limit: ${query.limit} items)`);
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Cat {
    console.log({ 'param.id': id });
    console.log(`This action returns #${id} cat`);
    return this.catsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(RequestBodyValidationPipePipe) updateCatDto: UpdateCatDto,
  ) {
    console.log({ 'param.id': id, updateCatDto: updateCatDto });
    console.log(`This action updates a #${id} cat`);
    this.catsService.updateOne(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`This action removes a #${id} cat`);
    this.catsService.removeOne(id);
  }
}
