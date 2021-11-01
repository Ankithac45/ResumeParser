import React from 'react';
import img1 from "./img7.svg";
import img2 from "./img8.svg";


const App = () => {
    return ( < >
        <
        div className = "Navigation" >
        <
        a > RESUME PARSER < /a> <
        a className = "fourth" > HOME ABOUT SIGNUP < /a> <
        /div> <
        div >
        <
        div className = "page" > < /div>   <
        h1 className = "Heading" > < b > Let 's Look at some Stats... </b></h1>   <
        img src = { img1 }
        alt = "Image can't be displayed"
        className = "img1" / >
        <
        img src = { img2 }
        alt = "Image can't be displayed"
        className = "img2" / >
        <
        /div> </ >
    );
};

export default App;