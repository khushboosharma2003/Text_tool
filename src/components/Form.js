import React, { useState } from 'react'
 function Form(props) {
    const [text, setText] = useState('heyyy ');
    // wrong way of changing state 
    // text =';kjklnkjnkj'
    //right way to corrrect starte
    // setText("new text ")
    // const [text , dbl]=useState('')
    // function handledbl()
    // {
    //     let newnum = Number(text)*10
    //     console.log(newnum);
    //     setText(newnum);
    // }
    function handleclick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase ." , 'success')
    }
    function handleCopy()
    {
        navigator.clipboard.writeText(text)
        props.showalert("Copied to clipboard ." , 'success')
    }
    const handleSpace=()=>
    {
        // console.log(typeof text, text);
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra space removed" , 'success')
       
    }
    function handleLOWclick() {
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowerrcase ." , 'success')
    }

    function handlechange(event) {
        console.log('on change');
        setText(event.target.value);
        // props.showalert("Content has been changed ." , 'warning')
    }
    function handlespeech()
    {
        let textbox = text;
        let synth =window.speechSynthesis;
        let voice=new SpeechSynthesisUtterance(`${textbox}`);
        let sounds =synth.getVoices();
        console.log(sounds);
        // voice.voice=sounds[10];
        synth.speak(voice);

    }
    function handleclear()
    {
         setText(' ');
         props.showalert("All contents got cleared ." , 'danger')
    }
    return (
        <div>

            <div className= {`container mt-5 text-${props.mode ==='light'?'dark' : 'light' }`}>
                <h1>TEXT - Counter , Uppercase ,Lowercase , Copy </h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.text}</label>
                    <textarea placeholder='enter text here '  className="form-control " onChange={handlechange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
                    <button onClick={handleclick} disabled={text.length===0} className='btn btn-primary mt-5 mx-4'> CONVERT TO UPPERCASE </button>
                    <button onClick={handleLOWclick} disabled={text.length===0} className='btn btn-primary mt-5 mx-4'> CONVERT TO LOWERCASE </button>
                    {/* <br /> */}
                    <button onClick={handleCopy} disabled={text.length===0} className='btn btn-primary mt-5 mx-4'> COPY TEXT </button>
                    <button onClick={handleSpace} disabled={text.length===0} className='btn btn-primary mt-5 mx-4'> REMOVE SPACE </button>
                    <button onClick={handlespeech} disabled={text.length===0} className='btn btn-primary mt-5 mx-4'> TEXT TO SPEECH </button>
                    <button onClick={handleclear} disabled={text.length===0} className='btn btn-danger mt-5 mx-4'> CLEAR </button>
                 
                </div>
            </div>
            <div className='container' >
                <main className="container" />
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div >
                        <h1 className="display-4 fst-italic"> Summary </h1>
                        <p className="lead my-3">
                        {/* var characterCount = text.replace(/\s/g, "").length; */}
                            <p>{text.replace(/\s/g, "").length} CHARACTERS </p>
                            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS </p>
                            <p>{0.008 * text.replace(/\s/g, "").length} Minutes Read</p>
                        
                            {/* <p>{vowels} VOWELS </p> */}
                            <h4>PREVIEW</h4>
                            <p>{text.length>0?text:"Enter something to preview ."}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;