import React, { useState } from 'react';
import "./contactus.css"
import Header from './common/Header';
const Contactus =()=> {
  const initialForm={
    name:"",
    email:"",
    message:"",
  };

const [formState, setFormState] = useState(initialForm);
const {name, email, message} = formState;
const [buttonMessage, setButtonMessage]= useState("Send Message");
const [loading, setIsLoading]=useState(false);

const onSubmit =(e)=>{
  e.preventDefault();
  console.log(formState);
  setTimeout(()=>{
 setIsLoading(false);
 setButtonMessage("Success!!");
 setFormState(initialForm);
  },1000 )
};
const onChange=(e)=>{
   const {name, value}=e.target;

   setFormState({...formState, [name]: value});
};
  return (
    <div>
       <Header />
    <div className='service-top'>
      <div className='title'>Get In Touch!!</div>
      <div className='sub'>Feel free to reach out us if there is any queries</div>
      <form onSubmit={onSubmit}>
        <div className='input-row'>
         <div className='side'>
          <label htmlFor='name'>Your Name</label>
          <input
               type='text'
               placeholder='Enter your name here'
               name='name' required
               value={name}
               onChange={onChange}/>

         </div>
        <div className='side'>
          <label htmlFor='name'>Your Email</label>
          <input
               type='email'
               placeholder='Enter your email here'
               name='email' required
               value={email}
               onChange={onChange}/>

        </div>
        <div className='textarea'>
          <label htmlFor='message'>Message</label>
          <textarea
               type='textarea'
               id="message"
               placeholder='Enter your message here'
               name='message' required
               value={message}
               onChange={onChange}/>

        </div>
       </div>
       <button type="submit">{loading ? "":buttonMessage}</button>
      </form>

    </div>
    </div>
  );
};

export default Contactus;