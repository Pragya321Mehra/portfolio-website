import './Component2.css'
//import vid1 from './assets/videos/Vite + React — Mozilla Firefox 2024-04-11 11-45-11.mp4'
import img1 from './assets/images/WhatsApp Image 2025-08-03 at 09.18.47_10cb3a66.jpg'
import vid2 from './assets/videos/Document — Mozilla Firefox 2024-04-11 11-27-49.mp4'
function C2() {
    return(
<>
<section className="first">
        <div>
            <span>Google Intern 2025</span>
            <span>Got the incredible opportunity to work with cutting-edge technology and innovative projects.</span>
        </div>

        <div className="secImg">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
            <img src={img1} alt=""/>
        </div>
    </section>
    <div className="sep"></div>

    <section className="first second">

        <div className="secImg">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
            <video src={vid2}
                autoPlay loop muted></video>

        </div>
        <div>
            <span>Etch-A-Sketch</span>
            <span>Get ready to dive into your childhood memories with a digital pen and paper. </span>
        </div>
    </section>

    
    <div className="sep"></div>


    <section className="first second">
    <div>
            <span>Machine Learning Enthusiast</span>
            <span>I also possess an understanding of neural networks , decision trees,
recommender systems ,Q-state learning and clustering.</span>
        </div>
        <div className="secImg">
            <img src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2021-12/machine-learning-examples-applications.png"
                alt=""/>

        </div>

    </section>

    <div className="sep"></div>

</>
    )
}
   
export default C2

    