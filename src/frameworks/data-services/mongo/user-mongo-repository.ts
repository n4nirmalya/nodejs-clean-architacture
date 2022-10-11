import { Model } from "mongoose";
import { UserRepository } from "src/core/abstracts/user-repository.abstract";
import { User } from "./model";
import { MongoGenericRepository } from "./mongo-generic-repository";

export class UserMongoRepository extends MongoGenericRepository<User> implements UserRepository  {
    private _userRepository: Model<User>;

    constructor(repository: Model<User>) {
        super(repository)
        this._userRepository = repository;
    }
    findByUserName(userName: string): Promise<User> {
        return this._userRepository.findOne({username:userName}).exec()
    }
}
