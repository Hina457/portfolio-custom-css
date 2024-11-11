
import Image from "next/image";
import style from "../about/about.module.css";
import gul from "../public/gul2.png";
import figma from "../public/figma.png"
import Resume from "../public/Resume.png"
import scre from "../public/scre.png"
import assignment from "../public/assignment table.png"
import gul4 from "../public/gul4.png"
import image from "../public/image.png";
export default function About(){
    return(
      <div>
 <div className={style.body}>
    
  <section className={style.always}>
  <div className={style.skillhead}><h2>About me</h2></div>
  
    <Image className={style.mainpic} src={image} alt="picabout"></Image>
  
            <p>
            I am a web developer with expertise in HTML CSS and TypeScript Currently I am advancing my knowledge in Generative AI Web 3.0 the metaverse and artificial intelligence to stay at the forefront of tech innovation. My journey includes exploring cutting-edge technologies to create immersive and intelligent web applications.

This description highlights your current skills and shows your commitment to learning emerging technologies. Let me know if you like any adjustments.
            </p>
        </section>
<section className={style.skills}>
    <div className={style.skillhead}>
            <h2>Skills</h2></div>
            <div className={style.skillslist}>
                <div className={style.skillitem}>HTML</div>
                <div className={style.skillitem}>CSS</div>
                <div className={style.skillitem}>JavaScript</div>
                <div className={style.skillitem}>React</div>
                <div className={style.skillitem}>Node.js</div>
                <div className={style.skillitem}>Python</div>
                <div className={style.skillitem}>Web Designing</div>
                <div className={style.skillitem}>Ai Agentic</div>
                <div className={style.skillitem}>App Development</div>
            </div>
        </section>
        <div className={style.skillhead}><h2>My Projects</h2></div>
        <section className={style.portfolio}>
          
            <div className={style.portfolioitem}>
               
                <h3>Project 1</h3>
                <p>Excited to share my latest project a Book Review Website built with Next.js and React</p>
                <Image src={gul} alt="Pic2" width={250}/>
                <a href="#">View Project</a>
            </div>
            <div className={style.portfolioitem}>
               
                <h3>Project 2</h3>
                <p>Excited to share my latest project a Book Review figma Website built with Next.js and React</p>
                <Image src={figma} alt="Pic2" height={300} width={300}/>
                <a href="#">View Project</a>
            </div>
            <div className={style.portfolioitem}>
        
                <h3>Project 3</h3>
                <p>Excited to share my latest project  a Book Review Website built with Next.js and React</p>
                <Image src={assignment} alt="Pic2" height={300} width={300}/>
                <a href="#">View Project</a>
            </div>
            <div className={style.portfolioitem}>
               
               <h3>Project 4</h3>
               <p>Excited to share my latest project  a Book Review Website built with Next.js and React</p>
               <Image src={scre} alt="Pic2" height={300} width={300}/>
               <a href="#">View Project</a>
           </div>

           <div className={style.portfolioitem}>
               
               <h3>Project 5</h3>
               <p>Excited to share my latest project a Book Review Website built with Next.js and React</p>
               <Image src={Resume} alt="Pic2" height={300} width={300}/>
               <a href="#">View Project</a>
           </div>


           <div className={style.portfolioitem}>
               
               <h3>Project 6</h3>
               <p>Excited to share my latest project a Book Review Website built with Next.js and React</p>
               <Image src={gul4} alt="Pic2" height={300} width={300}/>
               <a href="#">View Project</a>
           </div>


            </section>
           

          
   </div>
   
    <div className={style.footer}>
    <p>©hina 2024 My Portfolio. All rights reserved.</p>
    </div>
    </div>
    
    )
  }

   