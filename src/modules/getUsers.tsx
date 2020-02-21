import React, {useState, useEffect} from "react";
import Search from "../components/search";

class User {
    public id: number = 0;
    public name: string = '';
    public counter: number = 0;

    constructor (id:number, name:string, counter:number){
        this.id = id;
        this.name = name;
        this.counter = counter;
    }
}


const Users: React.FunctionComponent = () => {
    const [users, setUsers]: [Array<User>, any] = useState([]);
    const [filteredUsers, setFilteredUsers]: [Array<User>, any] = useState([]);
    const [searchValue, setSearchValue]: [string, any] = useState('');

    useEffect(() => {
        usersGenerator();
    }, []);

    useEffect(() => {
        searchUsers()
    }, [searchValue]);

    const usersGenerator = (): void => {
        let users: Array<User> = [];
        for (let i: number = 1; i <= 100; i++) {
            const user: User = new User(i,`User ${i}`, 0)
            users.push(user);
        }
        setUsers(users);
    };

    const searchUsers = (): void => {
        const result: Array<User> = users.filter(user => user.name.includes(searchValue));
        setTimeout(function () {
            setFilteredUsers(result)
        }, 300);

    };

    const increment  = (userId: number): void => {
        let newArray: Array<User> = [...users];
        users.forEach((user,index) => {
            if(user.id !== userId){
                newArray[index].counter++;
            }
        });
        setUsers(newArray);
    };

    const removeItem = (userId: number): void => {
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
                            <li className="list-group-item w-100 mr-2"
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