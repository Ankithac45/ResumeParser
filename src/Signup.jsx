import React from 'react';
import icon1 from "./icon1.jfif";
import icon2 from "./icon2.png";
import icon3 from "./icon2.png";
import MyImage from "./img2.svg"; { document.body.style = 'background: #457B9D' }
const Signup = () => {
    return ( <
        >
        <
        div >
        <
        div className = "frame" > < /div>  <
        h1 className = "Heading" > SIGN UP < /h1> <
        img src = { MyImage }
        alt = "Image not available"
        className = "img2" / >
        <
        img src = { icon1 }
        alt = "Image not available"
        className = "icon1" / >
        <
        img src = { icon2 }
        alt = "Image not available"
        className = "icon2" / >
        <
        img src = { icon3 }
        alt = "Image not available"
        className = "icon3" / >
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
        input type = "password"
        placeholder = "CONFIRM PASSWORD"
        className = "cpassword" / >
        <
        button type = "submit"
        className = "Submit" > < span className = "signup" > SIGN UP < /span></button >
        <
        /form> <
        h4 className = "Heading1" > Already a user ? SIGN IN < /h4> <
        /div>  <
        / >
    );
}

export default Signup;