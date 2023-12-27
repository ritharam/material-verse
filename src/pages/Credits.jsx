import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Credits() {
  return (
    <div>
        <Navbar/>
        <div className="md:p-28 py-28 px-8 bg-[#f5f5f5]">
            <div className="font-[IntroScript] text-4xl font-extrabold text-[#05acb4] text-center">
            Credits
            </div>
            <div className="font-[FontSpring] md:px-[100px] py-10 font-normal">
                <p>We would like to acknowledge and express our gratitude to the following individuals, 
                organizations, and resources that have contributed to the development of "Unitastic."</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">Development Frameworks and Libraries:</h3>
                <ul className='list-disc px-10'>
                    <li><b>React.js:</b> We utilized the React.js framework to create the dynamic and responsive user interface of our website.</li>
                    <li><b>Bootstrap:</b> The Bootstrap framework helped us design and structure our web pages efficiently, ensuring a user-friendly experience.</li>
                    <li><b>Firebase:</b> We relied on Firebase for data management, authentication, and analytics, enhancing the functionality and security of our services.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#202222] py-2">Icon Resources:</h3>
                <ul className='list-disc px-10'>
                    <li><b>Font Awesome:</b> We extend our thanks to Font Awesome for providing a comprehensive library of high-quality icons that enhanced the visual elements of our website.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#202222] py-2">Graphic Resources:</h3>
                <ul className='list-disc px-10'>
                    <li><b>Freepik:</b> We are grateful to Freepik for providing high-quality graphical images and resources that added visual appeal to our website.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#202222] py-2">Feedback and Support:</h3>
                <p>Our users have played a vital role in shaping "Unitastic." We appreciate all the feedback,
                 suggestions, and support from our user community.</p>
                <p>If you have any questions or concerns about these T&C, please contact us at  
                <a href="unitastic@outlook.com" className='underline text-blue-600 hover:text-blue-500'> unitastic@outlook.com</a>.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Credits
