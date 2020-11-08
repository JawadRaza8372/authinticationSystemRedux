import React from "react";
function Login(props){
    const {lemail,lpassword, lsetemail,lsetpassword,login,signup,hasaccount,setaccount,emlerror,paserror}=props;
    function setemail(event){
        lsetemail(event.target.value);
    }
    function setpass(event){
        lsetpassword(event.target.value);
    }
    return(<>
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text"
            onFocus
            required
            value={lemail}
            onChange={setemail}/>
            <p className="errorMsg">{emlerror}</p>
            <label>Password</label>
            <input type="password"
            onFocus
            required
            value={lpassword}
            onChange={setpass}/>
            <p className="errorMsg">{paserror}</p>
            <div className="btnContainer">
                {
                    hasaccount?
                    (<><button onClick={login}>Sign In</button><p>Don't have an account?<span onClick={()=>{setaccount(!hasaccount)}}>SignUp</span></p></>)
                    :(<><button onClick={signup}>SignUP</button><p>Have an account<span onClick={()=>{setaccount(!hasaccount)}}>Sign in</span></p></>)
                }
            </div>
        </div>
        </section>
    </>);
}
export default Login;