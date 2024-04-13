

import './Component1.css'
function C1() {
    
   
     return (
       <>
        
       <main>
        <nav> <span><img width="53"  src="public\images\logo.svg" alt="" /><p>ragya</p></span>
        <div>
                <button className="btn">English</button>
                <button className="btn btn-red-sm">Resume</button>
            </div> </nav>
         <div className="box">
          
         </div>
         <div className="hero">
            <span>Hey there viewers ! I am Pragya.</span>
            <span>I am a frontend developer and I love to code.</span>
            <span>Ready to check out my work?</span>
            <div className="hero-buttons">
                {/* <input type="text" placeholder="Email Address"/> */}
                <button className="btn btn-red">Say HI!! &gt;</button>
            </div>
        </div>
       </main>
       </>
     )
   }
   
   export default C1
   