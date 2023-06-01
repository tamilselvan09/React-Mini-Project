import React from "react";
import user from "../images/user.png";


const ContactCart = (props) => {
    const {id, name, email} = props.contact;
return (
    <div className="item">
         <img className="ui avatar image" src={user} alt="user"  />
        <div className="contact">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" 
        style={{color:"red", marginTop: "8px"}}
        onClick={() => props.clickHandler(id)}
        ></i>
    </div>

);
};

export default ContactCart;