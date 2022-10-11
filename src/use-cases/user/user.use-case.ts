import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
@Injectable()
export class GenreUseCases {
  constructor(
    private dataServices: IDataServices,
    private genreFactoryService: GenreFactoryService,
  ) {}


}
