import React from 'react';

class AddContact extends React.Component {

    state ={
        name:"",
        email:"",
    }
     add =(e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert ("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        console.log(this.state)
        
     };
     render(){
        return(
         <div className='ui main'>
            <h2>Add Contact</h2>
            <form className="ui form" onSumit={this.add}>
                <div className='field'>
                    <label htmlFor="">Name</label>
                    <input type="text"
                     name="name"
                     placeholder='Name'
                      value ={this.state.name}
                     onchange ={(e)=> this.setState({name: e.target.value})} />
                </div>
                <div className='field'>
                    <label htmlFor="">Email</label>
                    <input type="text"
                     name="email" 
                    placeholder='Email'
                     value ={this.state.email} 
                     onchange ={(e)=> this.setState({name: e.target.value})} />
                </div>
                <button className='ui button green'>Add</button>

            </form>
         </div>
        );
     }
}


export default AddContact;