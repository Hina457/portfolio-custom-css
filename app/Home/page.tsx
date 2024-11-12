
import Image from "next/image";
 import style from "../Home/home.module.css";
 import pic from "../public/pic.jpeg";

 export default function Home(){
    return(
        <div>
           <div className={style.bad}>
        
        <Image className={style.pic}src={pic} alt="profile" height={200} width={200}/>
   <div className={style.heading}>

    <h4>Hello! Welcome</h4>
    <h1>I am Hina Alvi</h1>
    <h5>i am Hina Alvi and i am fronthand developers i have 3 year Experience in this feild now continue artificial intelligence html,css,javascript,typescript</h5>
     <button className={style.cn}><a href="./About">About me</a></button>
   </div>
   
    </div>
    <div className={style.footer}>
    <p>©hina 2024 My Portfolio. All rights reserved.</p>
    </div>
    </div>
        
    )
 }