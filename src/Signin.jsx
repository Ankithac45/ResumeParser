import React from 'react';
import MyImage from "./img1.svg"; { document.body.style = 'background: #457B9D' }
const App = () => {
    return ( <
        >
        <
        div >
        <
        div className = "frame" > < /div>  <
        h1 className = "Heading" > SIGN IN < /h1> <
        img src = { MyImage }
        alt = "Image not available"
        className = "img1" / >
        <
        form >
        <
        input type = "text"
        placeholder = "USERNAME"
        className = "username" / >
        <
        input type = "password"
        placeholder = "PASSWORD"
        className = "password" / >
        <
        button type = "submit"
        className = "Submit" > < span className = "signin" > SIGN IN < /span></button >
        <
        /form> <
        /div>  <
        / >
    );
}

export default App;