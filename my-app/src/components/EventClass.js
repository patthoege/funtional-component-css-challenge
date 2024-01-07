import React, { Component } from 'react'

export class EventClass extends Component {

    clickHandler() {
        console.log("Clicked class button")
    }

    render () {
        return (
            <div>
                <div>
                <button onClick={this.clickHandler}>Click - EventClass </button>
            </div>
            </div>
        )}
    }

export default EventClass  