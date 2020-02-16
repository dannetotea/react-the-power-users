import React, {useState, useEffect} from "react";
import Search from "../components/search";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        usersGenerator();
    }, []);

    useEffect(() => {
        searchUsers()
    }, [searchValue]);

    const usersGenerator = () => {
        let users = [];
        for (let i = 1; i <= 100; i++) {
            users.push({id: i, name: `User ${i}`});
        }
        setUsers(users);
    };

    const searchUsers = () => {
        const result = users.filter(user => user.name.includes(searchValue));
        setTimeout(function () {
            setFilteredUsers(result)
        }, 300);

    };

    return (
        <>
            <Search searchValueChild={setSearchValue}/>
            <ul className="list-group w-25">
                {searchValue ? filteredUsers.map(user => {
                    return <li key={user.id} className="list-group-item">{user.name}</li>
                }) : users.map(user => {
                    return <li key={user.id} className="list-group-item">{user.name}</li>
                })}
            </ul>
        </>
    )
};

export default Users;