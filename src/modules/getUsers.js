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
            users.push({id: i, name: `User ${i}`, counter: 0});
        }
        setUsers(users);
    };

    const searchUsers = () => {
        const result = users.filter(user => user.name.includes(searchValue));
        setTimeout(function () {
            setFilteredUsers(result)
        }, 300);

    };

    const increment = (userId) => {
        let newArray = [...users];
        users.forEach((user,index) => {
            if(user.id !== userId){
                newArray[index].counter++;
            }
        });
        setUsers(newArray);
    };

    const removeItem = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
    };

    return (
        <div className="p-4">
            <Search searchValueChild={setSearchValue}/>
            <ul className="list-group w-50">
                {searchValue ? filteredUsers.map(user => {
                    return (
                        <div key={user.id} className="d-flex w-100 mb-2">
                            <li className="list-group-item w-100 mr-2">{user.name}</li>
                            <button type="button" className="btn btn-outline-danger"
                                    onClick={() => removeItem(user.id)}>Remove
                            </button>
                        </div>
                    )
                }) : users.map(user => {
                    return (
                        <div key={user.id} className="d-flex w-100 mb-2">
                            <li id={user.id} className="list-group-item w-100 mr-2"
                                onClick={() => {
                                   increment(user.id)
                                }}
                            >{user.counter ? `${user.name} - ${user.counter}` : user.name}</li>
                            <button type="button" className="btn btn-outline-danger"
                                    onClick={() => removeItem(user.id)}>Remove
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};

export default Users;