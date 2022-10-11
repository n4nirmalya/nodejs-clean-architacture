import { User } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class UserRepository extends IGenericRepository<User>{
    abstract findByUserName(userName:string):Promise<User>;
}