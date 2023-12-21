import React,{ useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Feedback() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [feedback,setFeedback] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = () => {
    // if(name.length === 0){
    //   alert("Name has left blank!");
    // }
    // else{
      const url = "https://materialverse.000webhostapp.com/feedback.php";

      let fData = new FormData();
      fData.append('name',name);
      fData.append('email',email);
      fData.append('feedback',feedback);
      fData.append('message',message);
    
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error=> alert(error));
    // }
  }

  return (
    <div className='bg-[#f5f5f5]'>
    <Navbar/>
    <div className="flex justify-center items-center">
      <div className="bg-white border-1 m-44 p-8 rounded-lg shadow-lg">
        <div className="font-[FontSpring] text-3xl font-semibold text-center">Contribute</div>
        <div className="font-[FontSpring] text-base font-normal p-4 ">Contribute to Unitastic by adding any 
        missing materials, previous<br></br> question papers, textbooks or presentations.</div>
        <div className="border-t-[1px] border-black"></div>
        <div className="flex flex-col">
          <div className="my-4">
            <input type="text" name="name" id="name" placeholder="Name*" 
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
          </div>
          <div className="my-4">
            <input type="email" name="email" id="email" placeholder="Email*" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
          </div>
          <div className="my-4">
            <select name="feedback" id="feedback" 
            value={feedback} onChange={(e) => setFeedback(e.target.value)}
            className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]">
                <option value="selectfeedbacktype">Select Feedback Type</option>
                <option value="suggestion">Suggestion</option>
                <option value="disperancy">Disperancy</option>
            </select>
          </div>
          <div className="my-4">
            <textarea name="message" id="message" placeholder="Message*" rows="3"
            value={message} onChange={(e) => setMessage(e.target.value)}
            className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
          </div>
          <div className="font-[FontSpring] text-sm font-normal text-[#6a7070]">* Fields marked with an asterisk are mandatory.</div>
          <div className='my-4'>
          <button type='button' onClick={handleSubmit} 
          className="rounded-full bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-1 font-semibold">
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Feedback