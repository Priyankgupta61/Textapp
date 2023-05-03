import React,{useState} from 'react'

function TextForm(props) {

    const[text,setText]= useState('');
    //setText("new text");//correct way to change the state



   const handleUpClick=()=>
   {
    let newText=text.toUpperCase();

     setText(newText);

   }
   const handledownClick=()=>
   {
    let newText=text.toLowerCase();

     setText(newText);

   }
   const handleClearClick=()=>
   {
   

     setText(" ");

   }

   const handleOnChange=(event)=>
   
   {
        setText(event.target.value)
   }
  return (

   <> 

  <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control"  value={text}  onChange={handleOnChange}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to LowerCase</button>
<button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
<div className="container my-3">

<h2>Your Text summary</h2>
<p>{text.split(" ").length} Words and {text.length} characters</p>
<p>{0.008 * text.split("").length}  Minutes read</p>

<h2>Preview</h2>
<p>{text}</p>
</div>
   </>
  )
}

export default TextForm
