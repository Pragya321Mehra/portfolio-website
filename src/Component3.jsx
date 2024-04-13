import './Component3.css'
import  { useState } from 'react';
function C3() {
    

        const [isVisiVisible, setIsVisiVisible] = useState(false);
        const [isVisiVisible1, setIsVisiVisible1] = useState(false);
        const [isVisiVisible2, setIsVisiVisible2] = useState(false);
        const [isVisiVisible3, setIsVisiVisible3] = useState(false);

        const handleButtonClick = () => {
            setIsVisiVisible(!isVisiVisible);
        };
        const handleButtonClick1 = () => {
            setIsVisiVisible1(!isVisiVisible1);
        };
        const handleButtonClick2 = () => {
            setIsVisiVisible2(!isVisiVisible2);
        };
        const handleButtonClick3 = () => {
            setIsVisiVisible3(!isVisiVisible3);
        };

   
    return(
<>

<section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faqbox">
            <div className="question"><span>What are my skills</span>
            <button className="show" onClick={handleButtonClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    </div>
        
            <div className={` ${isVisiVisible ? 'visible' : 'not'}`}>
            I am well versed in HTML, CSS, JavaScript and react. I am an excellent coder and have a great grasp in C ,C++ and Java. I am also good at problem solving and have a good understanding of data structures and algorithms.
        </div>
    
            
        </div>
    
        <div className="faqbox">
            <div className="question"><span>What are my achievements</span>
            <button className="show" onClick={handleButtonClick1}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    </div>
        
            <div className={` ${isVisiVisible1 ? 'visible' : 'not'}`}>
            Pupil at codeforces (max 1214) <br />
Course completion by codingninjas on data structures and algorithms with Java <br />
Diva winner in CodeRush 2024 coding contest <br />
   Participated in Execute 3.0 hackathon  <br />
   9557 rank in JEE mains 2022 <br />



        </div>
    
            
        </div>
        <div className="faqbox">
            <div className="question"><span>what are my extra curricular interests </span>
            <button className="show" onClick={handleButtonClick2}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    </div>
        
            <div className={` ${isVisiVisible2 ? 'visible' : 'not'}`}>
            Mentor in poetry wing of Sahitya (official debating and literary society of dtu) . Handled leadership roles and provided guidance to juniors <br />
           Participated in various poetry and debate competitions <br />
            Excellent swimmer <br />
            Have a good hand in content writing  <br />

        </div>
    
            
        </div>
        <div className="faqbox">
            <div className="question"><span>Where is my education from</span>
            <button className="show" onClick={handleButtonClick3}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    </div>
        
            <div className={` ${isVisiVisible3 ? 'visible' : 'not'}`}>
            B.Tech in Computer Science Engineering from Delhi Technological University (2022-2026) <br />
            12th from Frank Anthony Public School, New Delhi (2022) <br />
            10th from Frank Anthony Public School, New Delhi (2020) <br />
        </div>
    
            
        </div>
    
        
    
    
    </section>
    <div className="sep"></div>

</>

    )
}
export default C3