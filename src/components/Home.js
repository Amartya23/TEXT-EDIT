import React ,{useState} from 'react'
export default function  Home(props) {
  
const handleUpClick = ()=>
{

    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
}
const handleLoClick =()=>
{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
}

const handleCopy = () =>
{
    let text=document.getElementsByClassName("X");
    text.select();
    navigator.clipboard.WriteText(text.value);
    alert("copy");
    props.showAlert("Text copied", "success");
}
const handleExtraSpaces = () =>
{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("All extra spaces are removed", "success");
}
const handleReClick = () =>
{
    let newText="";
    setText(newText);
    props.showAlert("All text cleared !", "success");
}
const handleOnChange =(event)=>
{
    setText(event.target.value);
}

     const [text, setText] = useState("");
  return (
    <>
        <div>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="MyBox" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary ms-3" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary ms-3 X" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary ms-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary btn-success ms-3" onClick={handleReClick}>Clear Text</button>
 </div>
 <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary :</h1>
    <p>{(text.split(" ").length)-1} words and {text.length} charecters</p>
    <p>{0.008*text.split("").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in the textbox above to preview it here "}</p>
 </div>


 </div>

</>
  );

}




