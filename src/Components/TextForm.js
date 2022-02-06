import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const changetoUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const changetoLwCase = () =>{
        setText(text.toLowerCase());
    }

    const clearBox = () =>{
        setText('');
    }

    const changeInputHandler = (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <div className="container">
            <h4 className={props.colors}>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="10" value={text} onChange={changeInputHandler}></textarea>
            </div>
            <button className="btn btn-primary" onClick={changetoUpCase}>Convert to UpperCase</button>
            <button className="ms-2 btn btn-primary" onClick={changetoLwCase}>Convert to Lowercase</button>
            <button className="ms-2 btn btn-primary" onClick={clearBox}>Clear text box</button>
        </div>
        <div className="my-3 container">
            <p className={props.colors}>Total Characters: <b>{text.length}</b></p>
            <p className={props.colors}>Total Words: <b>{text.split(" ").length-1}</b></p>
        </div>
        </>
    )
}