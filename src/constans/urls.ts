const baseURL = 'http://localhost:3003';

const event='/event';
const users='/user';

const urls={
    events: {
        base: event
    },
    users: {
        base: users,
        byId: (id:string) => `${users}/${id}`

    }
}
export {
    baseURL,
    urls
}