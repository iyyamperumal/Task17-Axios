import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User = ({ id, name, username, email, address, phone, website, company, removeUser }) => {
    const navigate = useNavigate();
    return (
        <div className="user-detail-card">
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <h5>User Name: {username}</h5>
            <h5>Email: {email}</h5>
            <h5>Address: {address.street}</h5>
            <h5>{address.suite}</h5>
            <h5>{address.city}</h5>
            <h5>Phone {phone}</h5>
            <h5>Website: {website}</h5>
            <h5>Company: {company.name}</h5>
            <h5>{company.catchPhase}</h5>
            <h5>{company.bs}</h5>
            <button onClick={() => removeUser(id)} style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                margin: "10px",
                padding: "5px",
            }}>Delete</button>
            <button
                onClick={() => {
                    navigate(`/add-user?edit=true&prodId=${id}`);
                }}
                style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "3px",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px",
                }}
            >
                Edit
            </button>
        </div>
    )
};
User.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    username: propTypes.string,
    email: propTypes.string,
    address: propTypes.object,
    phone: propTypes.string,
    website: propTypes.string,
    company: propTypes.object,
    removeUser: propTypes.func,
}
export default User;