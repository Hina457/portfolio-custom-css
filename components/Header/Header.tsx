

import style from "./style.module.css"
import Link from "next/link"
export default function Header(){
    return(
        <div>
            

                
  <div className={style.main}>
    <div className={style.navbar}>
  <h1 className={style.name}>HinaAlvi</h1>
    <ul>
        <li><Link href="./Home">Home</Link></li>
        <li><Link href="./About">About</Link></li>
        <li><Link href="./Contact">contact</Link></li>
        </ul>
  </div>
    </div>
    
   
    </div>


    
    )
}