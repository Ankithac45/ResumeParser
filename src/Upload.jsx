import React from 'react';
import MyImage from "./img4.svg"; { document.body.style = 'background: #A8DADC' }
const App = () => {
    return ( < >
        <
        div className = "Navigation" >
        <
        a > RESUME PARSER < /a> <
        a class = "fourth" > HOME ABOUT SIGNUP < /a> <
        /div> <
        div >
        <
        div className = "page" > < /div>   <
        h2 className = "Heading" > Upload Documents < /h2>  <
        img src = { MyImage }
        alt = "Image can't be displayed"
        className = "img" / >
        <
        button type = "submit"
        className = "upload" > < b > Upload.... < /b></button >
        <
        button type = "submit"
        className = "build" > < b > SUBMIT < /b></button >
        <
        /div> </ >
    );
};

export default App;