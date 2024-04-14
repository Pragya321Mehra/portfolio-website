

import './Component1.css'
import logo from './assets/images/logo.svg'

function C1() {
    
   
     return (
       <>
        
       <main>
        <nav> <span><img width="53"  src={logo} alt="" /><p>ragya</p></span>
        <div>
                <button className="btn">English</button>
                <button className="btn btn-red-sm" onClick={ ()=>{window.open("https://docs.google.com/document/d/127Vk9pLw23A8yJwexYk43JXbAfbXGkw3SnJIjspOqwA/edit?usp=sharing");} }>Resume</button>
            </div> </nav>
         <div className="box">
          
         </div>
         <div className="hero">
            <span>Hey there viewers ! I am Pragya.</span>
            <span>I am a frontend developer and I love to code.</span>
            <span>Ready to check out my work?</span>
            <div className="hero-buttons">
                {/* <input type="text" placeholder="Email Address"/> */}
                <button className="btn btn-red" onClick={ ()=>{window.open("https://www.linkedin.com/in/pragya-mehra-7a9b0226a/");} }>Say HI!! &gt;</button>
            </div>
        </div>
       </main>
       </>
     )
   }
   
   export default C1
   