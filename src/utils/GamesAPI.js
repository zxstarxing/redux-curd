import axios from 'axios';
const api = process.env.REACT_APP_GAME_API_URL || "https://5c0e58b9e1498a0013364873.mockapi.io"

const getAll = () => axios.get(`${api}/game`);

const get=(id)=>axios.get(`${api}/game/${id}`);

const push = (params)=>axios.post(`${api}/game`,params);

const remove = (id)=>axios.delete(`${api}/game/${id}`);

const update = (id,params)=>axios.put(`${api}/game/${id}`,params)

export {
    getAll,
    get,
    push,
    remove,
    update
}