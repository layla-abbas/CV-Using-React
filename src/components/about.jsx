import line from '../assets/line.svg'
import frontend from '../assets/fron-end.json'
import Lottie from 'lottie-react'
import square from '../assets/square.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import github from '../assets/github.png'
import line2 from '../assets/line2.png'

export default function About() {
  return (
    <div className='flex justify-between'>
<div>
<h1 id="text-back" className="text-white w-fit mt-7 px-3 text-sm mb-2 tracking-wider font-extrabold
md:text-xl md:px-7 md:mt-10
lg:text-2xl lg:px-10  lg:mt-16">
  Layla Abbas Nayef
</h1>
<p className="text-pink-400 text-xs ml-3 font-semibold
md:text-xl md:ml-4
lg:text-2xl lg:ml-9">
  Front-End Web Developer
</p>
<p className="text-white text-xs tracking-wider ml-3 w-40 mt-2
md:text-lg md:w-64 md:ml-4 md:leading-6 
lg:text-xl lg:ml-9 lg:w-96">
  
Hey, I am Layla Abbas Nayef,
 Control and Systems Engineer with one year of experience in front-end web development , 
 I hold certified credentials from the She Codes Too bootcamp and Coursera in front-end web development.
</p>
<img src={line2} alt="" className='absolute w-40 top-72 
md:top-96 md:w-60 
lg:hidden' />
<img src={line2} alt="" className='hidden lg:absolute lg:bottom-52 lg:inline lg:w-64' />
</div>

<img src={line} alt="" className='w-1 h-auto
md:w-2' />

<div>
  <img src={square} alt="" className='w-16 absolute top-0 right-0
  md:w-24
  lg:w-36 lg:right-40 lg:top-12'/>
<Lottie animationData={frontend}  className='w-40 h-auto mt-4 
md:w-72 
lg:w-80 lg:mr-32 lg:mt-7'/>

<div className='mt-4' >
  <h2 className='text-pink-400 font-semibold text-center text-sm
  md:text-xl md:mb-1 md:tracking-wider
 lg:text-2xl lg:mr-14 '>Contact</h2>
  <div>

<img src={phone} alt="" className='w-4 h-auto inline
md:w-6 md:mb-1' />
<a href="tel:07805003022" className='text-xs pl-1 text-white 
md:text-lg md:mb-1 md:pl-2
'>
  +964 780 500 3022</a>
  </div>
  <div>
<img src={mail} alt="" className='w-4 h-auto inline 
md:w-6 md:mb-1' />
<a href="mailto:layla.abbas01@gmail.com" className='text-xs pl-1 text-white 
md:text-lg md:mb-1 md:pl-2
 ' >
layla.abbas01@gmail.com</a>
  </div>
  <div>
<img src={github} alt="" className='w-4 h-auto inline 
md:w-6 md:mb-1 ' />
<a href="https://github.com/layla-abbas" className='text-xs pl-1 text-white
md:text-lg md:mb-1 md:pl-2 
'>github/layla-abbas</a>
  </div>
</div>
</div>
    </div>
  )
}
