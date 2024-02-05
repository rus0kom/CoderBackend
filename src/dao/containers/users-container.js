export default class UsersContainer {

    constructor(model){
        this.model = model;
    }

    async getData(id) {
        if(id) {
            try {
                const data = await this.model.findOne({ id: `${id}` });
                if(!data) {
                    return { id, status: 'not found' }
                } else {
                    return data;
                }
            } catch (error) {
                return { error }
            }
        } else {
            try {
                const data = await this.model.find();
                if(!data) {
                    return { status: 'not found' }
                } else {
                    return data;
                }
            } catch (error) {
                return { error }
            }
        }
    }

    async setData(dto) {
        try {
            await this.model.create(dto);
            return { id: `${dto.id}`, status: 'added'}
        } catch (error) {
            return { error }
        }
    }
};