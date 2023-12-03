import React from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ContactUs(){
    return (<>
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
      Contact Us      
      </h1>
      <p className='mb-4 text-slate-700'>
      We're here for you! If you have any questions, concerns, or just want to connect, we'd love to hear from you. Feel free to reach out through any of the channels below, and our dedicated support team will get back to you as soon as possible.
      </p>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
      Customer Support     
      </h1>
      <p className='mb-4 text-slate-700'>
      For assistance with technical issues, website usage, or any general inquiries, our team is ready to help.
      </p>
      <Feedback/>
      <br/>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
      Feedback and Suggestions
      </h1>
      <p className='mb-4 text-slate-700'>
      We value your feedback as it helps us improve and enhance our services. Whether you have suggestions for new features or improvements, or if you'd like to share your experience with Mobile Depression Therapy, we're eager to hear from you.
      </p>
      <Feedback/>
    </div>

    
    </>)
}
function Feedback(){

  const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
     
    };
    const { currentUser } = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
      e.preventDefault();
      formData['username'] = currentUser.email
      const res = await fetch('/api/user/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json(); 
      console.log(data)
      navigate('/')  

    };
  
    return (<>
      <form onSubmit={handleSubmit} className=''>
      <input
  type='text'
  placeholder='Write Here'
  id='feedback'
  className=''
  style={{
    padding: '10px',
    fontSize: '16px', 
  }}
  onChange={handleChange}
/>
<input
  type='submit'
  placeholder='Submit'
  style={{
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px', 
    
  }}
/>

        </form>
    </>)
}