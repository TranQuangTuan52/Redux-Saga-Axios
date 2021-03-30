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
        const url = `/products`;
        return axiosClient.delete(url, {id})
    }
}

export default productApi;