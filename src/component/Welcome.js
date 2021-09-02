import React, { Component } from 'react'
import TestProps from './TestProps'


class Welcome1 extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            output: []
        }
        console.log("Construtor")


    }

    async getData() {
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((json) => {
                let result = json.json()
                return result
            })
            .then((result) => {
                this.setState([...this.state.output, { output: result }])
                console.log(this.state.output)
            }
            );
    }

    componentDidMount() {
        this.getData()
        console.log("Component did mount")
    }

    incCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (

            <div>
                {console.log("In render")}
                <h1>{this.state.count}</h1>
                <h2></h2>
                <button onClick={this.incCount}>Click</button>
                <TestProps count={this.state.count}></TestProps>
            </div>

        )
        // <Welcome/>

    }
}


function Welcome() {

    return (
        <h1> Welcome</h1>
    )
}
export { Welcome1, Welcome }