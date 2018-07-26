import React,{ Component } from 'react';
import {  Input } from 'reactstrap';



const SearchBox=( {searchValue})=>{
    return (
        <div>
             <Input type="text" name="search" onChange={searchValue}  placeholder="search robots" />
        </div>
    )
};

export default SearchBox;