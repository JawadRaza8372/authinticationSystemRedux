import React from "react";
function Hero(props){
    return(<>
        <section className="hero">
        <nav>
            <h2>Welcome</h2>
            <button onClick={props.action}>Logout</button></nav>
        </section>
    </>);
}
export default Hero;