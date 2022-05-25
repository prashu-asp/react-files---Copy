import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count : this.props.value

    }



    handleIncrement = () => {
        this.setState({count :  this.state.count + 1})
    }


    handleDecrement = () => {
        this.setState({count : this.state.count -1})
    }

    render() {





        return (
            <div>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{this.state.count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleIncrement}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleDecrement}>Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

        );

        
    }
}


export default Counter;









