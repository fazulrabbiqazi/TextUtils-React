import React, {useState} from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("")
    // text= "New text" //wrong way to change text
    // setText("New Text") // correct way
    
    const handleUpClick= ()=> {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", 'success')
    }   

    const handleLoClick= ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success')
    }

    const handleClearClick = ()=> {
        let newText = ("");
        setText(newText);
        props.showAlert('Text Cleared!', 'success')
    }

    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Text copied!', 'success')
    }

    const handleExtraSpaces= ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed', 'success')
    }

    //to be able to write and remove text on text area
    const handleOnChange = (event)=> {
        // console.log("On Change")
        setText(event.target.value);
    }

    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='light'?'white':'#04044d', color: props.mode==='light'?'dark':'black'}} rows="8" onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text here</h2>
        <p><b>{text.split(/\s+/).filter(word => word.length > 0).length}</b> words and <b>{text.length}</b> characters</p>
        <p>It will take <b>{0.008 * (text.split(/\s+/).filter(word => word.length > 0).length)}</b> minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text above to preview here"}</p>
    </div>

    </>

  )
}
