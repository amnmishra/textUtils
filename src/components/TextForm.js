import React, { useState } from 'react'



export default function TextForm(props) {

    const changeTOUpperCase = (event) =>{
        // console.log("onChange");
        setText(event.target.value);
        

    }
    const changeUpperCase =() => {
        // console.log("Upper Case was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Change UpperCase","success");
    }
    const changeLoverCase =() => {
        // console.log("Upper Case was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Change Lower Case","success");
    }
    const cleartextbox = () => {
        setText("");
        props.showAlert("Clear Text Box","success");
    }
       

    const copyText = () => {
        var text = document.getElementById('textid');
        text.select();
        document.execCommand('copy');
        props.showAlert("Clipboard Copied","success");
      }
    const removeExtraSpace = () =>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All Extra Spaces Removed","success");
    }


    
    const [text , setText] = useState("");
    
  return (
    <>

    <div className={`container my-3 py-3 text-${props.mode === 'light' ? 'dark':'light'}`} >
        <div className={`container my-3 py-3 `} >
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">                
                    <textarea className={`form-control bg-${props.mode === 'light' ? 'light':'dark'} text-${props.mode === 'light' ? 'dark':'light'} `} value={text} onChange={changeTOUpperCase} id="textid" rows="8"></textarea>
                </div> 
                <button className='btn btn-primary mx-2' onClick={cleartextbox}>Clear Text Box</button>
                <button className='btn btn-primary mx-2' onClick={changeUpperCase}>Convert UperCase</button>
                <button className='btn btn-primary mx-2' onClick={changeLoverCase}>Convert LoverCase</button>
                <button className='btn btn-primary mx-2' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={removeExtraSpace}>Remove Extra Space</button>


            </div>
        </div>
            <div className={` container m-3 p-2`}>
                <h6>Text Summary</h6>
                <p> {text.length>0?text.split(/[ ]+/).length:"0" } words and {text.length} character</p>
                <p> If you want read average take time {0.008 * text.split(" ").length} </p>
                <h5>Preview</h5>
                <p>{text.length>0?text:"Please Enter Text"}</p>
            </div>
        </div>
    </>
  )
}
