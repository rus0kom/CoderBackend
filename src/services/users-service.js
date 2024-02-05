import crypto from 'crypto'
import { usersDao } from '../dao/dao-factory.js';
import UsersRepository from '../repositories/users-repository.js';
import UserDto from '../dto/create-user-dto.js';

function idGenerator() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class UsersService {
    constructor() {
        this.userRepository = new UsersRepository(usersDao);
    }

    async setData({body}) {
        const user = new UserDto({
            id: idGenerator(),
            ...body
        });
        await this.userRepository.setData(user);
        return user.asDto();
    }

    async getData() {
        const users = await this.userRepository.getData();
        return users.map(user => user.asDto());
    }
}