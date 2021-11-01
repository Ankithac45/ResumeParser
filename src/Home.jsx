import React from 'react';
import MyImage from "./img3.svg"; { document.body.style = 'background: #A8DADC' }
const App = () => {
    return ( < >
        <
        div className = "Navigation" >
        <
        a > RESUME PARSER < /a> <
        div className = "fourth" > < span className = "home" > HOME < /span><span className="about"> ABOUT</span > < span className = "signup" > SIGNUP < /span></div >
        <
        /div> <
        div >
        <
        div className = "page" > < /div>   <
        h1 className = "Heading" > < b > We 're drowning in information and starving for knowledge. </b></h1> <
        img className = "img3"
        src = { MyImage }
        alt = "Image can't be displayed" / >
        <
        button type = "submit"
        className = "rate" > < b > Rate your Resume < /b></button >
        <
        button type = "submit"
        className = "build" > < b > Build your Resume < /b></button >
        <
        button type = "submit"
        className = "stand" > < b > Where you stand < /b></button >
        <
        /div> </ >
    );
};

export default App;