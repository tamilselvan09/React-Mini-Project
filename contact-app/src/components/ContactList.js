import React from "react";
import ContactCart from "./ContactCart";



const ContactList = (props) => {
    console.log(props);

    const deleteConactHandler = (id) => {
      props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) =>{
       return <ContactCart contact={contact} clickHandler={deleteConactHandler} key={contact.id}></ContactCart>;
    });
return (
   <div className="ui celled list"> {renderContactList}
   </div>
)
};


export default ContactList ;