import img1 from '../images/reg.webp'
//import {VscEye} from 'react-icons/vsc'

import React,{Component} from 'react';
<<<<<<< HEAD
import FormValidator from './Rvalid';
import axios from 'axios'

class Register1 extends Component{


=======
import FormValidator from './Rvalide';




class Register1 extends Component{

>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64
  handlePasswordChange(e){
    this.setState({password:e.target.value});
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
    constructor(props){
        super(props);

  this.state ={
    hidden:true,
    password:'',
  };
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  
<<<<<<< HEAD


    this.state = {
      full_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
  };
  this.handlesubmit = this.handlesubmit.bind(this);

  


=======
        
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64
this.validator = new FormValidator([{
field: 'full_name',
method: 'isEmpty',
validWhen: false,
message: 'Enter full name'
}, {
field: 'email',
method: 'isEmpty',
validWhen: false,
message: 'Enter your email address'
}, {
field: 'email',
method: 'isEmail',
validWhen: true,
message: 'Enter valid email address'
}, {
field: 'phone',
method: 'isEmpty',
validWhen: false,
message: 'Enter a phone number'
}, {
field: 'phone',
method: 'matches',
args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
validWhen: true,
message: 'Enter valid phone number'
}, {
field: 'password',
method: 'isEmpty',
validWhen: false,
message: 'Enter password'
}, {
field: 'password_confirmation',
method: 'isEmpty',
validWhen: false,
message: 'Enter Password confirmation'
}, {
field: 'password_confirmation',
method: this.passwordMatch, // notice that we are passing a custom function here
validWhen: true,
message: 'Password and password confirmation do not match'
}]);
this.state = {
full_name: '',
email: '',
phone: '',
password: '',
password_confirmation: '',
validation: this.validator.valid(),
}
this.submitted = false;
}
passwordMatch = (confirmation, state) => (state.password === confirmation)
handleInputChange = event => {
event.preventDefault();
this.setState({
[event.target.name]: event.target.value,
});
}
<<<<<<< HEAD
handlesubmit(e) {
  e.preventDefault();
  const {full_name, email, phone, password, password_confirmation } = this.state;
  console.log( full_name, email, phone, password, password_confirmation);
  fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
          "content-type":"application/json",
          Accept:"application/json",
          "Accept-Control-Allow-Origin":"'",
      },
      body:JSON.stringify({
          full_name,
          email,
          phone,
          password,
          password_confirmation,
      }),
  })
  .then((res)  => res.json())
  .then((data) => {
      console.log(data, "userRegister");
  });
}

=======
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64
handleFormSubmit = event => {
  const validation = this.validator.validate(this.state);
  this.setState({
validation

});
this.submitted = true;
if(validation.isValid) {
//reaches here if form validates successfully...
}
}
    

render() {
    let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation

    
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
   
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#7f5539]">Register</h2>
      <p class="text-xs mt-4 text-[#7f5539]">Welcome..! Enter your Detail</p>

<<<<<<< HEAD
      <form  onSubmit={this.handlesubmit}className="registrationForm" class="flex flex-col gap-5">

<div className={validation.email.isInvalid && 'has-error'} class="relative mt-4">

<input type="string" className="p-2 rounded-xl border w-full" name="full_name" placeholder="Full Name" onClick={this.handleInputChange} onChange={ (e)=> this.setState({full_name: e.target.value})}/> 
=======
      <form className="registrationForm" class="flex flex-col gap-5">

<div className={validation.email.isInvalid && 'has-error'} class="relative mt-4">

<input type="string" className="p-2 rounded-xl border w-full" name="full_name" placeholder="Full Name" onChange={this.handleInputChange} /> 
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64

    <span className="help-block text-justify text-red-500">{validation.full_name.message}</span>

 </div>

<div className={validation.email.isInvalid && 'has-error'} class="relative">

<<<<<<< HEAD
<input type="email" className="p-2 rounded-xl border w-full" name="email" placeholder="Email address" onClick={this.handleInputChange} onChange={ (e)=> this.setState({email: e.target.value})} /> 
=======
<input type="email" className="p-2 rounded-xl border w-full" name="email" placeholder="Email address" onChange={this.handleInputChange} /> 
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64

    <span className="help-block text-red-500">{validation.email.message}</span>

 </div>

<div className={validation.phone.isInvalid && 'has-error'} class="relative">

<<<<<<< HEAD
<input type="phone" className="p-2 rounded-xl border w-full" name="phone" placeholder="Phone Number" onClick={this.handleInputChange} onChange={ (e)=> this.setState({phone: e.target.value})} /> 
=======
<input type="phone" className="p-2 rounded-xl border w-full" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> 
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64
    <span className="help-block text-red-500">{validation.phone.message}</span> 

</div>


<div className={validation.password.isInvalid && 'has-error'} class="relative">

<<<<<<< HEAD
<input type="password" value={this.state.password} className="p-2 rounded-xl border w-full" placeholder="Password" name="password" onClick={this.handleInputChange} onChange={ (e)=> this.setState({password: e.target.value})} /> 
=======
<input type={this.state.hidden ? 'password' : 'text'} value={this.state.password} className="p-2 rounded-xl border w-full" placeholder="Password" name="password" onChange={this.handlePasswordChange} /> 
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64

    <span className="help-block text-red-500">{validation.password.message}</span> 

     {/* <VscEye className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2' onClick={this.toggleShow}/> */}

 </div>
 
<div className={validation.password_confirmation.isInvalid && 'has-error '} class="relative">
    
<<<<<<< HEAD
    <input type="password"  value={this.state.password_confirmation} className="p-2 rounded-xl border w-full" placeholder="Confirm Password" name="password_confirmation" onClick={this.handleInputChange} onChange={ (e)=> this.setState({password_confirmation: e.target.value})} /> 
        <span className="help-block text-red-500">{validation.password_confirmation.message} </span> 
            {/* <VscEye class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" onClick={this.toggleShow}/> */}
  </div>
=======
    <input type="password"  value={this.state.password_confirmation} className="p-2 rounded-xl border w-full" placeholder="Confirm Password" name="password_confirmation" onChange={this.handleInputChange} /> 
        <span className="help-block text-red-500">{validation.password_confirmation.message}
        
        </span> 
            {/* <VscEye class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" onClick={this.toggleShow}/> */}

</div>
>>>>>>> e9bc37723a4b88728b928f6608bfdfee66e4ac64



<button onClick={this.handleFormSubmit} class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300" type='button'>Register</button>

</form>

    


      <div class="mt-3 text-xs flex justify-between items-center text-[#7f5539]">
        <p>Already have an account?</p>
        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
      </div>
    </div>

    
    <div class="md:block hidden w-1/2">
    <img src={img1}></img>
    </div>
  </div>
</section>

    </div>
  )
}

}


export default Register1;