import axios from "axios";

//Create Axios
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar", },
});
//Read All datas in CRUD operation
const readAllData = async () => {
    const response = await instance.get("/");
    return response.data;
};

//Read Single Data to edit or update in CRUD operation
const readSingleData = async (dtid) => {
    const response = await instance.get(`/${dtid}`);
    return response.data;
};

//Edit data in CRUD operation
const editData = async (id, data) => {
    const response = await instance.put(`/${id}`, data);
    return response.data;
};

//Create new data in CRUD operation
const createData = async (dtdt) => {
    const response = await instance.post("/", dtdt);
    return response.data;
};

//Delete a data in CRUD operation
const deleteData = async (dtid) => {
    const response = await instance.delete(`/${dtid}`);
    return response.data;
};

export { readAllData, readSingleData, editData, createData, deleteData };