import axiosInstance from "../api"

export const Users = {
    async getAll(){
        try {
            const res = await axiosInstance.get('/users');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },

    async createUser(model){
        try {
            const res = await axiosInstance.post('/users', model);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },

    async deleteUser(id){
        try {
            const res = await axiosInstance.delete(`/users/${id}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },

    async updateUser(id, model){
        try {
            const res = await axiosInstance.put(`/users/${id}`, model);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}