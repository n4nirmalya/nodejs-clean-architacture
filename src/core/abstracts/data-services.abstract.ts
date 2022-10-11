import { Author, Book, Genre, User } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { UserRepository } from './user-repository.abstract';

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;

  abstract books: IGenericRepository<Book>;

  abstract genres: IGenericRepository<Genre>;

  abstract users: UserRepository;
}
