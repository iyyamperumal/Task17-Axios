import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div style={{
            textAlign: "center",
            fontSize: "50px",
            textDecoration: "none"
        }}>
            <h1>Home page</h1>
            <Link to="/Users" style={{ textDecoration: "none", color: "brown", fontWeight: "bolder", fontSize: "30px" }}>Users Details</Link><br />
            <Link to="/add-user" style={{ textDecoration: "none", color: "Green", fontWeight: "bolder", fontSize: "30px" }}>Add New User</Link>
        </div>
    )
};
export default Home;