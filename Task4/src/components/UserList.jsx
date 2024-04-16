import React, { useState, useEffect } from 'react';

const UserList = () => {
    const[user, setUser] = useState([]);
   

    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {user.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}       
        </div>
    );
};

export default UserList;

