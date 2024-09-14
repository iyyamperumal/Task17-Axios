import propTypes from "prop-types";
import { useEffect, useState } from "react";
import {
    readSingleData,
    editData,
    createData
} from "../api/crud-axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [catchPhrase, setPhrase] = useState("");
    const [bs, setBs] = useState("");

    const addUser = async (data) => {
        await createData(data);

        navigate("/users");
    };
    const editUser = async (id, data) => {
        await editData(id, data);

        navigate("/users");
    };
    const loadDatas = async () => {
        if (searchParams.get("dtid")) {
            const data = await readSingleData(searchParams.get("dtid"));
            setId(data.id);
            setName(data.name);
            setUserName(data.username);
            setEmail(data.email);
            setStreet(data.address.street);
            setSuite(data.address.suite);
            setCity(data.address.city);
            setPhone(data.phone);
            setWebsite(data.website);
            setCompanyName(data.company.name);
            setPhrase(data.company.catchPhrase);
            setBs(data.company.bs);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchParams.get("edit")) {
            editUser(searchParams.get("id"), { id, name, username, email, address, phone, website, company });
        } else {
            addUser({ id, name, username, email, address, phone, website, company });
        };
        setId(0);
        setName("");
        setUserName("");
        setEmail("");
        setStreet("");
        setSuite("");
        setCity("");
        setPhone("");
        setWebsite("");
        setCompanyName("");
        setPhrase("");
        setBs("");
    };
    useEffect(() => {
        loadDatas();
    }, []);

    return (
        <>
            <h1>User Details Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="id">ID: </label>
                <input type="text" name="id" placeholder="ID" required></input>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Name" required></input>
                <label htmlFor="username">User name: </label>
                <input type="text" name="username" placeholder="Username" required></input>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" placeholder="Email" required></input>
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" placeholder="Street"></input>
                <label htmlFor="empty"></label>
                <input type="text" name="address" placeholder="Suite"></input>
                <label htmlFor="empty"></label>
                <input type="text" name="address" placeholder="City"></input>
                <label htmlFor="empty"></label>
                <input type="text" name="address" placeholder="Zipcode"></input>
                <label htmlFor="phone">Phone: </label>
                <input type="number" name="phone" placeholder="Phone" required></input>
                <label htmlFor="website">Website: </label>
                <input type="website" name="website" placeholder="Website"></input>
                <label htmlFor="company">Company: </label>
                <input type="text" name="company" placeholder="CompanyName"></input>
                <label htmlFor="empty"></label>
                <input type="text" name="company" placeholder="CatchPhrase"></input>
                <label htmlFor="empty"></label>
                <input type="text" name="company" placeholder="BS"></input>
                <button type="submit" style={{
                    width: "155%",
                }}>{searchParams.get("edit") ? "Edit" : "Add"} user</button>
            </form>
        </>
    )
};
UserForm.propTypes = {
    addUser: propTypes.func.isRequired,
};
export default UserForm;