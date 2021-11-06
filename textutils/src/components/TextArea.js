    import React from 'react'
    import './stylesheet.css'
export default function TextArea(props) {
const [Text, setText] = React.useState('Enter Your Text');

    //------------------------------ funtions-----------------------------------

        // const replacingWord = document.querySelector(".replacingword").value;
        // const newWord = (event)=>{console.log( event.target.value)};


                const clearBox = ()=> { if(Text==='Enter Your Text' || Text==='ENTER YOUR TEXT') {  setText("");}}

                const handleChange = (event)=> {setText(event.target.value) }

                const converttoupper= ()=> {setText(Text.toUpperCase())}

                const converttolower= ()=> {setText(Text.toLowerCase())}

                const handleCopy= ()=> {navigator.clipboard.writeText(Text)}

                const handleExtraSpace= ()=> {var newText=Text.split(/[ ]+/); setText(newText.join(" "))}

                const handleModification= ()=>{
                                          const textModifyDiv = document.querySelector(".textmodificationdiv");
                                                if(textModifyDiv.style.display==="none")
                                                {textModifyDiv.style.display="block"}
                                                else{textModifyDiv.style.display="none"}
                                            }

                const closeModificationDiv = ()=>{  const textModifyDiv = document.querySelector(".textmodificationdiv"); 
                                            if(textModifyDiv.style.display==="block")
                                            {textModifyDiv.style.display="none"}}
                
   /*----submit button----*/  const handleReplacing= ()=>{const newWord = document.querySelector("#newword").value;
                                                const replacingWord = document.querySelector("#replacingword").value;
                                                var x=Text;
                                                while(x.indexOf(replacingWord) !== -1)
                                                {
                                                x =(x.replace(replacingWord, newWord));
                                                setText(x);
                                                }
                                                closeModificationDiv(); }


                const handleReplace= ()=>{document.querySelector("#newword").style.display="block";
                                            document.querySelector(".capitalise-btn").style.display="none";
                                            document.querySelector(".replace-btn").style.display="block";
                                            handleModification();}
                const handleCapitalise= ()=>{document.querySelector("#newword").style.display="none";
                                             document.querySelector(".replace-btn").style.display="none";
                                             document.querySelector(".capitalise-btn").style.display="block";
                                             handleModification();
                                                }


                const handleCapitalising= ()=>{    var valueModified;
                                                const valueToModify = document.querySelector("#replacingword").value;
                                                
                                                closeModificationDiv(); }


                const handleReset= ()=> {setText("")}


     


    return (
        <div>
            <div className="container mt-5 px-5 py-5">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={Text} onClick={clearBox} onChange={handleChange} style={props.style}></textarea>
            </div>
            <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary btn-sm mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={converttolower}>Convert To Lowercase</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={converttoupper}>Convert to Uppercase</button>
            <button className="btn btn-primary replace btn-sm mx-1" onClick={handleReplace}>Replace Word</button>
            <button className="btn btn-primary replace btn-sm mx-1" onClick={handleCapitalise}>Capitalise Specific Word</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleReset}>Reset Box</button>
            </div>
                <div className="container text-center textmodificationdiv">
                    <p>Case Sensitive!</p>
                    <div className="mt-4">
                    <input className="form-control mt-3" id="replacingword" placeholder="Enter the word to replace"></input>
                    <input className="form-control mt-3" id="newword" placeholder="Enter the New Word"></input>
                    <button className="btn btn-primary btn-sm mt-3 replace-btn" onClick={handleReplacing}>Replace</button>
                    <button className="btn btn-primary btn-sm mt-3 capitalise-btn" onClick={handleCapitalising}>Capitalise</button></div >
                </div>
            </div>

            <div className="container px-5 pb-5">
                
                <h3>{Text.split(" ").length} words and {Text.length} characters</h3>
                <h2 className="py-2">Preview:</h2>
                <p>{Text}</p>
            </div>

        </div>
    )
}

