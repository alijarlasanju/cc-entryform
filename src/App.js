import React from 'react';
import './App.css';

function App(){
    const handleChanger=(e)=>{
    const form=e.target.form;
    const index=Array.prototype.indexOf.call(form,e.target);
    if(e.target.value.length===4 ){
        if(index+1 < 4){
                form.elements[index+1].focus();
                }
                else
                {
                  form.elements[index].focus();
                }
         }
        else if(e.target.value.length===0){
              console.log("index:", index);
                  if(index-1 >= 0){
                      form.elements[index-1].focus();
                    }
                    else
                    {
                      form.elements[index].focus();
                    }
            }
      }
      const onKeyPress=async(e)=> {
      const ch=String.fromCharCode(e.which)
            if (!(/[0-9]/.test(ch))) {
                    e.preventDefault()
                }
              }
    return (
     <div>
     <form className="App">
        <div>
          <label className="inputBox">Card Number*</label>
          <input className="inputBox" type="text" size="10" maxLength="4" onChange={handleChanger} onKeyPress={onKeyPress}/>
          <input className="inputBox" type="text" size="10" maxLength="4" onChange={handleChanger} onKeyPress={onKeyPress}/>
          <input className="inputBox" type="text" size="10" maxLength="4" onChange={handleChanger} onKeyPress={onKeyPress}/>
          <input className="inputBox" type="text" size="10" maxLength="4" onChange={handleChanger} onKeyPress={onKeyPress} />
         </div>
    </form>
    </div>
  )
}

export default App;
