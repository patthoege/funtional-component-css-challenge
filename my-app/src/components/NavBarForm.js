import React from "react";
import css from "./css/NavBarForm.module.css";
import "./css/NavBarForm.module.css";
import NavBarFormChild from "./NavBarFormChild";

class NavBarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        };
    }

    handleClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false : true
          }), () => console.log(this.state.isLoggedIn));
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery </h1>

                <NavBarFormChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleClick={this.handleButtonClick}
                />
            </div>
        ) 
    }
}

export default NavBarForm;