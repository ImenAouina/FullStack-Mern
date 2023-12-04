import React,{useState} from 'react'


const Tabs = () => {

    const tabs= [
      {label:"tab1", content:"Tab1 content is showing here"},
      {label:"tab2", content:"Tab2 content is showing here"},
      {label:"tab3", content:"Tab3 content is showing here"}
    ];
    const [tab, setTab]=useState(tabs);
    
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
