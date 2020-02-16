import React, {useState} from "react";

const Search = (props) => {
    const {searchValueChild} = props;

    return (
        <div className="w-25 mb-5">
            <input placeholder="Search name" onChange={(event) => {
                searchValueChild(event.target.value);
            }}/>
        </div>
    );
};

export default Search;