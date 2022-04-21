import React, { Component } from 'react';
import '../style.scss';
import axios from "axios";
class Contact extends Component {

    constructor(){
        super()
        this.state ={
            fullName:'',
            email:'',
            phone:'' ,
            data:[]
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePhone(event){
        this.setState({
            phone:event.target.value
        })
    }

    onSubmit=async(event)=>{
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone
        }

        console.log(registered)
try{

   await axios.post('http://localhost:4000/app/signup', registered)
    .then(response => console.log(response.data));
    this.getData();
    
}catch(err){
    console.log(err)
}
        this.setState({
            fullName:'',
            email:'',
            phone:''
        })
    }




    getData=async()=>{
        
        try{
            const data = await axios.get('http://localhost:4000/app/get-all-data');
            console.log(data.data);
            this.setState({
            data:data.data
            })
        }catch(err){
            console.log(err);
        }
    }

componentDidMount() {
    this.getData();
}

    render(){
        return(
            <>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                        Full Name: 
                            <input type='text'
                            placeholder='Enter your full name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className="form-control form-group"
                            />
                            <br /><br />
                             Email Id: 
                            <input type='text'
                            placeholder='Enter your email-id here'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                            />
                            <br /><br />
                            Phone Number: 
                            <input type='text'
                            placeholder='Enter your contact number'
                            onChange={this.changePhone}
                            value={this.state.phone}
                            className="form-control form-group"
                            />
                            <br /><br />    

                            <input type='submit'
                            className="btn btn-danger btn-block"
                            value='submit'
                            />
                        </form>    

                    <div>
                    {
                        this.state.data.length>0?
                        this.state.data.map(item=>(
                            <>

                            <h4>
                                {item.fullName} {'-'} {item.email} {'-'} {item.date.substr(0,10)}
                            </h4>
                            
                            </>

                        ))
                        : 
                       <h1>No data</h1>
                    }


                    </div>
                                

                    </div>

                </div>
            </>
        );
    }
}

export default Contact;