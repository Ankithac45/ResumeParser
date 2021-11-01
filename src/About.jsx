import React from 'react';
import MyImage from "./img5.svg";
import IMG1 from "./Charvi.jpg";
import IMG2 from "./Ankitha.jpeg";
import IMG3 from "./Chaitra.jpeg"; { document.body.style = 'background: #A8DADC' }
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
        div className = "page" > < /div> <
        p className = "heading" > About: < /p>   <
        p className = "paragraph" >
        This project aims to build a website which facilitates the resume selection process both
        for students and the working class.We aim to integrate it with machine learning models and other APIs. < /p>  <
        img src = { MyImage }
        alt = "Image can't be displayed"
        className = "contentcreator" / >
        <
        h1 className = "creators" > Creators: < /h1> <
        img src = { IMG1 }
        alt = "Image can't be displayed"
        className = "Charvi" / >
        <
        p className = "Name1" > Charvi Bannur < /p> <
        img src = { IMG2 }
        alt = "Image can't be displayed"
        className = "Ankitha" / >
        <
        p className = "Name2" > Ankitha C < /p> <
        img src = { IMG3 }
        alt = "Image can't be displayed"
        className = "Chaitra" / >
        <
        p className = "Name3" > Chaitra Bhat < /p> <
        /div> </ >
    );
};

export default App;