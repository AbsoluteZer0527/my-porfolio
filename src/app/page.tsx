import {useState, useEffect} from "react"
import FloatingText from "../../components/FloatingText";

export default function HomePage() {
  return (
    <>
      <nav className="bg-gray-300/50 flex justify-between px-10 py-5">
        <ul>  
          <li><a  href = "#art" className="hover:text-blue-500">Art</a></li>
          <li><a href = "#gamedev" className="hover:text-blue-500" >Game Dev</a></li>
          <li><a href = "#programming" className="hover:text-blue-500">Programming</a></li>
        </ul>
      </nav>
      
      <div>
        <FloatingText />
      </div> 
    </>
    
  );
}
