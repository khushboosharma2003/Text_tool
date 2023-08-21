import React from 'react'

export default function About(props) {

    let myStyle= {
        color : props.mode==="dark"?'white':'black', 
        background : props.mode==="dark"?"black":"white"
        
    }

return (
    <div className='container py-2 mb-6 my-4' style={myStyle} >

        <h1 className='m-4'> About Us </h1>
        <hr />
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Free
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is a free and easy to use app that helps us to copy , convert text</strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Utilities
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This provides us the feature of changing text to Uppercase , Lowercase , Copy text , Removing extra spaces .</strong> I
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       Responsive
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is a responsive whether you can open open it in mobiles , tablets , PC's it will be perfectly organised and maintained</strong> 
                    </div>
                </div>
            </div>
        </div>
        {/* <button className='btn btn-primary my-5' onClick={myStyleConvert} >{btnText}</button> */}

    </div>
)
}

    // const[btnText, changeText]=useState('enable DARK myStyle')
    
    // const myStyleConvert = () => {
    //     if (myStyle.color === 'black') {
    //         chngmyStyle(
    //             {

    //                 backgroundColor: 'black',
    //                 color: 'white'


    //             }
                
    //         )
    //         changeText("ENABLE LIGHT myStyle ")
    //     }

    //     else{
    //         chngmyStyle(
    //             {
    //                 backgroundColor: 'white',
    //                 color: 'black'
    //             }
    //         )
    //         changeText("ENABLE DARK myStyle ")
    //     }
        
    // }