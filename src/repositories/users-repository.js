import User from '../dto/create-user-dto.js';

export default class UsersRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getLoggedUsers() {
        const dtos = await this.dao.getData();
        return dtos.map(dto => new User(dto));
    }
}