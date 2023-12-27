import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Terms() {
  return (
    <div>
        <Navbar/>
        <div className="md:p-28 py-28 px-8 bg-[#f5f5f5]">
            <div className="font-[IntroScript] text-4xl font-extrabold text-[#05acb4] text-center">
            Terms and Conditions
            </div>
            <div className="font-[FontSpring] md:px-[100px] py-10 font-normal">
                <p>Last Updated: Sep 4th, 2023</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">1. Acceptance of Terms</h3>
                <p>By using the Website, you acknowledge that you have read, understood, and agreed to these 
                    T&C. If you are using the Website on behalf of an organization, you are agreeing to these 
                    terms for that organization and confirming that you have the authority to do so.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">2. User Responsibilities</h3>
                <p>You agree to use the Website responsibly and in accordance with all applicable laws and 
                    regulations. You are responsible for maintaining the confidentiality of your account and 
                    password and for all activities that occur under your account.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">3. Intellectual Property</h3>
                <p>All content, trademarks, logos, and other intellectual property on the Website are the 
                    property of "Unitastic" and are protected by intellectual property laws. You may not use,
                    reproduce, or distribute any content from the Website without our express written consent.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">4. Prohibited Activities</h3>
                <ul className='list-disc px-10'>
                    <li>Spamming or sending unsolicited communications.</li>
                    <li>Hacking or attempting to gain unauthorized access to the Website.</li>
                    <li>Posting or distributing harmful or inappropriate content.</li>
                    <li>Violating any applicable laws or regulations.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#202222] py-2">5. Disclaimers</h3>
                <p>The information and tools provided on the Website are for educational and informational 
                    purposes only. We make no guarantees regarding the accuracy or completeness of the 
                    information provided. Your use of any information or tools from the Website is at your 
                    own risk.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">6. Liability Limitations</h3>
                <p>We are not liable for any damages or losses incurred as a result of your use of the 
                Website. To the extent permitted by applicable laws, we disclaim all warranties, express or implied.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">7. Termination of Services</h3>
                <p>We reserve the right to terminate or suspend your access to the Website at our discretion,
                 with or without cause, and with or without notice.</p>
                 <h3 className="text-2xl font-bold text-[#202222] py-2">8. Changes to T&C</h3>
                 <p>We may modify these T&C at any time. Changes will be effective upon posting on the Website. 
                    Continued use of the Website after changes indicate your acceptance of the new terms.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">9. Governing Law</h3>
                <p>These T&C are governed by and construed in accordance with the laws of India. Any legal 
                    action arising out of or relating to these T&C shall be filed and adjudicated in the courts of India.</p>
                <h3 className="text-2xl font-bold text-[#202222] py-2">10. Contact Information</h3>
                <p>If you have any questions or concerns about these T&C, please contact us at  
                    <a href="unitastic@outlook.com" className='underline text-blue-600 hover:text-blue-500'> unitastic@outlook.com</a>.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Terms
