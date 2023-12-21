import React,{useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ClassSkip() {
  const [credits,setCredits] = useState()
  const [skipped,setSkipped] = useState()
  const [classskip,setClassskip] = useState(0)

  const calculateClassSkip = () => {
    let totalClassSkip = credits*3;
    if (isNaN(skipped)){
      setClassskip(totalClassSkip);
    } else {
      totalClassSkip -= skipped;
      setClassskip(totalClassSkip);
    } 
  }

  return (
    <div>
    <Navbar/>
      <div className="bg-[#f5f5f5]">
        <div className="flex justify-center items-center">
          <div className="bg-white border-1 mx-96 my-44 w-full p-8 rounded-lg shadow-lg">
          <div className="font-[FontSpring] text-2xl font-semibold text-center">Class Skippability Calculator</div>
          <div className="border-t-[1px] border-black my-2"></div>
            <div className="flex flex-col justify-between my-4 mx-2">
              <div className="my-2">
                <input type="number" name="credits" id="credits" placeholder="Credits" 
                value={credits} onChange={(e) => setCredits(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
              <div className="my-2">
                <input type="number" name="skipped" id="skipped" placeholder="Skipped" 
                value={skipped} onChange={(e) => setSkipped(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
            </div>
            <div className="border-t-[1px] border-black my-2"></div>       
          <button type='button'
          onClick={calculateClassSkip}
          className="rounded-full my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
          Calculate </button>
          <div className="font-[FontSpring] my-2 text-2xl font-semibold text-center">
          {classskip === 0 ?  "You cant skip classes" : `You can skip ${classskip} classes`}</div>
        </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default ClassSkip