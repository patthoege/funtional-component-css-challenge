import React from 'react'

function NavBarFormChild(props) {
    return (
        props.isLoggedIn ? 
        <button onClick={props.handleClick}>Log In</button>
        :
        <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder="username" id="username"/>
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            <button  onClick={props.handleClick}>Submit</button>
        </form>
    )        
}

export default NavBarFormChild;