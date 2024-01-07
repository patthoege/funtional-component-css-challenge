import React from 'react'

function EventsFunctional() {

    function clickHandler() {
        console.log("Clicked functional button")
    }


    return (
        <div>
            <button onClick={clickHandler}> Click - FunctionalComponent </button>
        </div>
  )
}

export default EventsFunctional