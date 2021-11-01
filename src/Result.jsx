import React from 'react';
import img1 from "./img1.jpg"; 
import img2 from "./img6.svg"; 

const App = () => {
    return (<>       
        <div className = "Navigation" >
        <a> RESUME PARSER</a>
        <a class="fourth">HOME ABOUT SIGNUP</a>
        </div>
        
        <div className = "page" > </div>  
        <h1 className = "Heading1">Great Job!! You set a bar with this one</h1>
        <h1 className = "Heading2">You'd make a Great</h1>
        <h1 className = "Heading3">ANALYST</h1>
        <img src = { img1 } alt = "Image can't be displayed" className = "img1" />
        <img src = { img2 } alt = "Image can't be displayed" className = "img2" />
         </>
    );
};

export default App;