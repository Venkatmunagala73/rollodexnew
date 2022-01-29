import React from 'react'

const Search = (props) => {
    return(
        <input 
            name = 'search'
            className = 'search-box'
            type = ''
            placeholder = 'type here'
            onChange = {props.handleSearch}
        />
    )
}

export default Search 