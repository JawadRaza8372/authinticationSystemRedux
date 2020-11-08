import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Fire from "./Fire";
import "./index.css";
import Hero from "./Hero";
function App() {
  const [user,setuser]=useState('');
  const [email,setemail]=useState('');
  const [emaileror,setemaileror]=useState('');
  const [password,setpassword]=useState('');
  const [passerror,setpasserror]=useState('');
  const [old,newuser]=useState(false);
  function clrinpt(){
    setemail('');
    setpassword('')
  }
  function clrerr(){
    setemaileror('');
    setpasserror('')
  }
  function error(err){
    switch (err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
            setemaileror(err.message);
            break;
      case "auth/wrong-password":
              setpasserror(err.message);
              break;
    }
  }
  function error2(err){
    switch (err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
            setemaileror(err.message);
            break;
      case "auth/weak-password":
              setpasserror(err.message);
              break;
    }
  }
  function handlelogin(){
    clrerr();
Fire 
.auth()
.signInWithEmailAndPassword(email,password).catch(error);

  }
  function handlesignin(){
    clrerr();
    Fire 
    .auth()
    .createUserWithEmailAndPassword(email,password).catch(error2);
    
      }
 function handlelogout(){
   Fire.auth().signOut();
 }
 function authlistener(){
   Fire.auth().onAuthStateChanged((user)=>{
     if (user){
       clrinpt();
       clrerr();
       setuser(user);
     }
     else {
       setuser('');
     }
   })
 }
 useEffect(()=>{
   authlistener();
 },[]);
  return (<>
    {user?( <Hero action={handlelogout}/>  ):(<Login 
      lemail={email}
      lpassword={password}
      lsetemail={setemail}
      lsetpassword={setpassword}
      login={handlelogin}
      signup={handlesignin}
      hasaccount={old}
      setaccount={newuser}
      emlerror={emaileror}
      paserror={passerror}
    />)}

  </>);
  }

export default App;
