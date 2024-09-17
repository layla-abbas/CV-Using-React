import About from "./components/about"
import background from './assets/background.png'
import Skill from "./components/more"
import square2 from './assets/square2.png'


export default function Home() {
  return (
<div className="lg:flex lg:justify-center lg:items-center">
<div id="container" className=" h-fit lg:my-10 lg:w-4/5  lg:border-white ;g:border-solid lg:border-2"
>
     <About />

<img src={background} alt="" className="mx-auto absolute mt-10 
md:mt-16
lg:w-7/12 lg:ml-36 lg:mt-0" />

<img src={square2} alt="" className="sticy w-10 mt-64
md:mt-96 md:pt-24 md:w-20
lg:w-28"/>

<Skill />
    </div>
</div>
  )
}
