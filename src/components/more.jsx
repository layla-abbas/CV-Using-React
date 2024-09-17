
import line3 from '../assets/line3.png'
import square3 from '../assets/square3.png'

export default function skill() {
  return (
    <div className='-mt-1 flex justify-between pb-5
   md:mt-3 lg:pt-5 lg:pb-8'>
<div>
<h1 id="text-back" className="text-white w-32 mt-10 text-center  text-sm mb-2 tracking-wider font-extrabold
md:text-xl md:w-52
lg:text-2xl lg:w-80"
      >Skills</h1>
        
  <p className='text-white text-xs leading-5 w-40 ml-3
  md:text-lg md:w-64
  lg:text-xl lg:w-96 lg:leading-10'>
• Programming Languages: HTML, CSS, JavaScript <br />
• Frameworks: React, Next.js <br />
• Experience with Tailwind CSS <br />
• Completed approximately 15 projects <br />
• Integration of projects with APIs <br />
• Experience with Git and GitHub <br />
• UI/UX Design using Figma <br /> 
        </p>
</div>

<div className='text-center'>
  <img src={square3} alt="" className=' hidden lg:absolute lg:inline lg:right-40 lg:-bottom-2/3 lg:w-44  '/>
<img src={line3} alt="" className='w-40 mt-8
md:mt-14 md:w-80
lg:w-96'/>

<div className='lg:mr-40'>
  
<h1 id="text-back" className="text-white ml-4 w-32 mt-10 text-center text-sm mb-2 tracking-wider font-extrabold
md:text-xl md:ml-20
lg:text-2xl lg:w-72 lg:ml-10"
      >Certificate</h1>
        
  <p className='text-white text-xs leading-5 w-40
  md:text-lg md:w-72 md:mt-3
  lg:text-xl lg:w-96 lg:leading-10 '>
<span className='text-orange-300'>Certified :</span> by the She Codes Too Bootcamp in Front-End Web Development and Business <br />
<span className='text-orange-300'>Certified :</span> by Coursera in Front-End Web Development <br />
<span className='text-orange-300'>B.Sc.</span>Control and Systems Engineer University of Technology
        </p>
</div>
</div>
    </div>
  )
}
