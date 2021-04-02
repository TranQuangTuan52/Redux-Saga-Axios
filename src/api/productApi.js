import axios from 'axios';
import axiosClient from './axiosClient';

const productApi = {
    getAll: (param) => {
        const url = '/products';
        return axiosClient.get(url, {param});
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = `/products`;
        return axiosClient.post(url, data)
    },
    delete: (id) => {
        const url = `/products/${id}`;
        // console.log(url + '/' + id)
        return axiosClient.delete(url)
        //return axios.delete(`https://6061485eac47190017a709a8.mockapi.io/products/${id}`)
    },
    put: (id,data) => {
        const url = `/products/${id}`;
        return axiosClient.put(url,  data);
    }
}

export default productApi;