import React, {useState} from 'react'

export default function MainBody() {

const [text, nextText]= useState('')

// const changeToUppercase=()=>{
//     const newText= text.toUpperCase()
//     nextText(newText)
// }

// const changeToLowercase=()=>{
//     const newText= text.toLowerCase()
//     nextText(newText)
// }

// const reverseText=()=>{
//     const newText= text.split("").reverse().join(""); 
//     nextText(newText)
// }


const handleOnChange=(event)=>{
    nextText(event.target.value)
}
  return (
   <>
   <div className="container mb-3 my-3">
  <h2  className="form-label">Enter your text here:</h2>
  <textarea className="form-control" rows="10" value={text} onChange={handleOnChange}></textarea>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={()=> nextText(text.toUpperCase())}>Change text to UpperCase </button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={()=> nextText(text.toLowerCase()) }>Change text to LowerCase </button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={()=> nextText(text.split("").reverse().join(""))}>Reverse text </button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={()=> nextText("") }>Clear</button>
</div>
<div className='container mb-3 my-3'>
<h2  className="form-label">Text summary:</h2>
<p  className="form-label">{text.split(' ').filter((el)=>el!=='').length} words {text.length} characters</p>
  <p  className="form-label">{0.008* text.split(' ').filter((el)=>el!=='').length} minutes to read</p>
</div>
<div className='container mb-3 my-3'>
<h2  className="form-label">Preview:</h2>
<p>{text.length>0?text:"Nothing to preview :("}</p>
</div>
   </>   
  )
}
