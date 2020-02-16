import React, {useState} from "react";

const Search = (props) => {
    const {searchValueChild} = props;

    return (
        <div className="w-50">
            <input className="w-100 my-4" placeholder="Search name" onChange={(event) => {
                searchValueChild(event.target.value);
            }}/>
        </div>
    );
};

export default Search;