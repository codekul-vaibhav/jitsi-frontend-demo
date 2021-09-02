import React from 'react'

function Paragraph() {

    let year=2021

    function msg(){
        console.log('Hiii')
    }
    return (
        <div>
            <p>
                <button onClick={msg}>
                    submit
                </button>
                {msg()}
                India{year}
                India
                India
            </p>
        </div>
    )
}

export default Paragraph
