

import contact from "../Contact/contact.module.css";
export default function Contact(){
    return(
        <div>
      
                   
                
             
      <div className={contact.bg}>
           <div className={contact.main}>
            <h1 className={contact.up}>
                Contact Us
            </h1>
            <form className={contact.form}>
               <input type="text"
               className={contact.text}
               placeholder="Your name"
               
               
               />

               <input type="Email"
                    className={contact.email}
                    placeholder="Your Email"/>

               <textarea className={contact.Message}
                    placeholder="Your Message"></textarea>

               <input type="submit"value="submit"
               className={contact.submit}/>

            </form>
            </div> 
            
            </div>
       
            <div className={contact.footer}>
    <p>©hina 2024 My Portfolio. All rights reserved.</p>
    </div>
        </div>
    )
}