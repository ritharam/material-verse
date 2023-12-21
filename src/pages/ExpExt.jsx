import React,{useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ExpExt() {
  const [internals,setInternals] = useState('')
  const [externals,setExternals] = useState({
    S: "NA",
    Ap: "NA",
    A: "NA",
    B: "NA",
    C: "NA",
    D: "NA",
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInternals(value);
    calculateExternals(value);
  };

  const calculateExternals = (value) => {
    let internals = parseInt(value);
    // if (isNaN(internals) || internals < 0 || internals > 50) {
    //     alert("Please enter a valid internal.")
    //     return;
    // }
    let updatedExternals = {...externals};
    updatedExternals.S = internals <= 41 ? "NA" : Math.ceil((91 - internals) * 2);
    updatedExternals.Ap = internals <= 36 ? "NA" : Math.ceil((86 - internals) * 2);
    updatedExternals.A = internals <= 25 ? "NA" : Math.ceil((75 - internals) * 2);
    updatedExternals.B = internals <= 16 ? "NA" : Math.ceil((66 - internals) * 2);
    updatedExternals.C = internals <= 5 ? "NA" : Math.ceil((55 - internals) * 2);
    updatedExternals.D = internals <= 0 ? "NA" : Math.ceil((50 - internals) * 2);
    setExternals(updatedExternals);
  }

  return (
    <div>
    <Navbar/>
      <div className="bg-[#f5f5f5]">
        <div className="flex justify-center items-center">
          <div className="bg-white border-1 mx-96 my-44 w-full p-8 rounded-lg shadow-lg">
          <div className="font-[FontSpring] text-2xl font-semibold text-center">Expected Externals</div>
          <div className="font-[FontSpring] text-base font-normal p-4 ">Calculate the externals marks required to get each overall grade based on internal marks.</div>
          <div className="border-t-[1px] border-black my-2"></div>
            <div className="flex flex-col justify-between my-4 mx-2">
              <div className="my-2">
                <input 
                type="text" 
                name="internals" id="internals" 
                placeholder="Internals" 
                value={internals} onChange={handleInputChange}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
            <div className="border-t-[1px] border-black my-2"></div>     
              <div className="my-2">
                <table className="text-center border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="p-4 border-b">Grade</th>
                            <th className="p-4 border-b">Externals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border-b">S</td>
                            <td className="p-2 border-b">{externals.S}</td>
                        </tr>
                        <tr>
                            <td className="p-2 border-b">A+</td>
                            <td className="p-2 border-b">{externals.Ap}</td>
                        </tr>
                        <tr>
                            <td className="p-2 border-b">A</td>
                            <td className="p-2 border-b">{externals.A}</td>
                        </tr>
                        <tr>
                            <td className="p-2 border-b">B</td>
                            <td className="p-2 border-b">{externals.B}</td>
                        </tr>
                        <tr>
                            <td className="p-2 border-b">C</td>
                            <td className="p-2 border-b">{externals.C}</td>
                        </tr>
                        <tr>
                            <td className="p-2 border-b">D</td>
                            <td className="p-2 border-b">{externals.D}</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>          
        </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default ExpExt