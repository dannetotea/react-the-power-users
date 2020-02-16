import React from "react";

const Users = () => {
    const usersGenerator = () => {
        let users = [];
        for(let i=1; i<=100;i++){
            users.push({id: i, name: `User ${i}`});
        }
        return users;
    };


    return (
        <ul className="list-group w-25">
            {usersGenerator().map(user => {
                return <li key={user.id} className="list-group-item">{user.name}</li>
            })}
        </ul>
    )
};

export default Users;