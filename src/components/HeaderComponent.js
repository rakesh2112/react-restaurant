import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header style = {{height: "50px", backgroundColor: "#a3450f", color: "white"}}>
                    <nav>
                        <div><marquee style = {{fontSize: "35px"}}>Welcome to the Spice hut restaurant login page!</marquee></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
