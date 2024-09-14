import { useEffect, useState } from "react";
import { readAllData, deleteData } from "../api/crud-axios";
import { useNavigate } from "react-router-dom";
import User from "./user";
const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const loadDatas = async () => {
        const data = await readAllData();
        setUsers(data);
    };

    const removeUser = async (userId) => {
        await deleteData(userId);
        setUsers(users.filter((user) => user.id !== userId));
    };

    const navigateToAdd = () => {
        navigate("/add-user");
    };

    useEffect(() => {
        loadDatas();
    }, []);
    return (
        <>
            <h1>Users details</h1>
            {users.map((user) => (
                <User {...user} key={user.id} removeUser={removeUser} />
            ))}
            <button
                onClick={navigateToAdd}
                style={{
                    fontSize: "20px",
                    float: "right",
                    position: "absolute",
                    top: 20,
                    right: 20,
                    border: "none",
                    cursor: "pointer",
                }}>Add New User</button>
        </>
    )
};
export default Users;