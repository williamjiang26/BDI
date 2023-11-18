import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Feedback(){
  //post
  const [formData, setFormData] = useState({});
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
  };

  return (<>
    <form onSubmit={handleSubmit} className=''>
        <input
          type='text'
          placeholder='Write Here'
          id='feedback'
          className=''
          onChange={handleChange}
        />
        <input
          type='submit'
        />
      </form>
  </>)
}
export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to Mobile Depression Therapy!
      </h1>
      <p className='mb-4 text-slate-700'>
        My name is Qilin and I will be your own personalized online therapist.
        This is a safe space to display your emotions. 
      </p>
      <p className='mb-4 text-slate-700'>
        We have all the resources you need. Setting goals, chatting with someone, accessing your mental states. 
      </p>
      <p className='mb-4 text-slate-700'>
        We recognize that everyone is different and have different needs when dealing with their mental health. 
        Therefore we offer customizable paths and features only for you. Your therapist is the only one in the world. 
      </p>
      <p className='mb-4 text-slate-700'>
        We would love to get your feedback on anything from features you wish were added to things we can improve on. 
      </p>
      <Feedback/>
    </div>
  );
}
