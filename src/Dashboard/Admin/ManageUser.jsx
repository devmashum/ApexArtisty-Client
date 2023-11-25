import axios from "axios";
import { useState, useEffect } from "react";
import AllUsers from "./AllUsers";

const ManageUser = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/users',
        })
            .then(function (response) {
                // Assuming response.data is an array of users
                setData(response.data);
            })
            .catch(function (error) {
                console.error('Error fetching user data:', error);
            });
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users {data.length}</h2>
            </div>
            {/* Display user data in a list, for example */}
            <ul>
                {data.map(user => <AllUsers key={user._id} user={user}></AllUsers>)}
            </ul>
        </div>
    );
};

export default ManageUser;
