import React, { useState } from 'react'


export default function TextForm(props) {
    const handleupclick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
         props.showAlert("Converted to Uppercase","Success");

    }
    const handleExtraSpaces = () => {
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("converted to Extraspace","Success");
     }
     const handleclearclick = ()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared","Success");
     }
    const handleDownclick = () => {

        var Text =document.getElementById('MyBox').value =text;
        setText(Text)
        
        //console.log(text);
        var  file = new Blob([Text], { type: 'text/plain' });
        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "Your document-" +Date.now() + ".txt";
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        setText(Text);
        // props.showAlert("Download is started","Success");
    }
    const handleloclick = () => {
        //console.log( "uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("converted to Case","Success");
    }
    const handlecopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","Success");
    }
    const handleonchange = (event) => {
        console.log( "on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');


    return (
        <><div className='container' style={{Color:props.mode ==='dark' ? 'white':'#042743'}}>  
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" id="MyBox"  value ={text} onChange={handleonchange} rows="10" style={{backgroundColor: props.mode ==='dark' ? 'grey':'white',Color:props.mode ==='dark' ? '#042743':'white'}}></textarea>
            </div>
            <button  className="btn btn primary mx-2 my-1" onClick={handleupclick}>Convert to uppercase </button>
            <button  className="btn btn primary mx-2" onClick={handleloclick}>Convert to lowercase </button>
            <button  className="btn btn primary mx-2" onClick={handleDownclick} >Download</button>
            <button  className="btn btn primary mx-2" onClick={handleExtraSpaces}>Space</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear Text</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        </div>
            <div className="container my-4"style={{Color:props.mode ==='dark' ? 'white':'#042743'}} >
                <h1>Your text summary</h1>
                <p> {text.split(" ").length}word count and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to priview it here"}</p>
            </div>
        </>
    )
}