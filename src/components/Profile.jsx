import React, {useState} from 'react';
import Axios from 'axios';

const Profile = (props) => {

    const { username, password } = props;
    const [vacations, setVacations] = useState([]);

    const profile = () => {
        Axios.post("http://localhost:5000/user/profile", {
            username: username,
            password: password,
            }).then((response) => {
                console.log(response);
                setVacations(response.data);
            }).catch((error) => {
                console.log(error);
        }
    )};

    return (
        <div>
            <h1>{username}'s Saved Vacations!</h1>
            {vacations.map((vacation) => {
                return (
                    <div>
                        <h2>{vacation.destination}</h2>
                        <h3>{vacation.startDate} - {vacation.endDate}</h3>
                        <h3>{vacation.price}</h3>
                    </div>
                )  
            })}
        </div>
    )
}

export default Profile;