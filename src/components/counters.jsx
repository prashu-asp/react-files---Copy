import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        
        counters : [
            {id :1, value : 0},
            {id :2, value : 0},
            {id :3, value : 0},
            {id :4, value : 0},
           
        ]
    }
    
    handleDelete = (counterId) => {
        const Ncounters = this.state.counters.filter(c=> c.id!=counterId);
        this.setState({counters : Ncounters});
    }
    
    render() {
        return (
            <div>
                { 
                this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value}/>)
                }
                

            </div>
        );
    }
}

export default Counters;