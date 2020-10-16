import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a28f5.firebaseio.com/'
});

export default instance;