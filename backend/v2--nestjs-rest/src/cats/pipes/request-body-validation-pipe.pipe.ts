import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class RequestBodyValidationPipePipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!this.isValidType(metatype)) {
      throw new BadRequestException('validation failed');
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (0 < errors.length) {
      throw new BadRequestException(errors);
    }
    return value;
  }

  private isValidType(metatype: Type<any>) {
    const types = [CreateCatDto, UpdateCatDto];
    return types.includes(metatype);
  }
}
