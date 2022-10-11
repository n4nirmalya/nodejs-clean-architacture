import { Injectable } from '@nestjs/common';
import { User } from 'src/core';
import { CreateGenreDto, UpdateGenreDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewGenre(createGenreDto: CreateGenreDto) {
    const newUser = new User()
    newGenre.name = createGenreDto.name;

    return newGenre;
  }

  updateGenre(updateGenreDto: UpdateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = updateGenreDto.name;

    return newGenre;
  }
}
