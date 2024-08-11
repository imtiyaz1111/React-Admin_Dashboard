import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className='SearchBox  '>
        <IoMdSearch className='mr-2'/>
        <input type="text" placeholder='Search here...' />
    </div>
  )
}

export default SearchBox
