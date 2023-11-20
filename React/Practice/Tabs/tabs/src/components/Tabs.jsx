import React,{useState} from 'react'


const Tabs = () => {
    
    const [content, setContent]=useState("")
    
  return (
    <div>
      <div>
                
        <button  onClick={(e)=>setContent("Tab1 content is showing here")}>TAB 1</button>
        <button  onClick={(e)=>setContent("Tab2 content is showing here")}>TAB 2</button>
        <button  onClick={(e)=>setContent("Tab3 content is showing here")}>TAB 3</button>
      </div>
      <div>
        <p>{content}</p>
      </div>  
      </div>    
   
  )
}

export default Tabs
