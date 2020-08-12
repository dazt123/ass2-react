import http from "./axiosHttp";

const getAll = () => {
    return http.get("/post");
};

const createpost = data => {
    return http.post("/post", data);
};
const removepost = id => {
    console.log(id);
    return http.delete(`/post/${id}`);
};
const updatepost = (id, data) => {
    return http.put(`/post/${id}`, data);
};
export default {
    getAll,
    createpost,
    removepost,
    updatepost,

};