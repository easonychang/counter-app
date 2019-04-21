import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    componentDidMount() {
        //Ajax Call
        //this.setState({ });
        console.log("Counters - Mounted");
    }

    render() { 

        console.log("Counters - Rendered");

        //Destructuring to replace this.props
        const {onReset, counters, onDelete, onIncrement } = this.props;

        return ( 
            <div>
                <button
                    onClick={onReset} 
                    className="btn btn-primary btn-sm m-2">Reset</button>
                <button className="btn btn-primary btn-sm m-2">Generate New Set</button>
                {
                    counters.map(counter => 
                        <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement} 
                        counter={counter}>
                            <h4>Name: {counter.name}</h4>
                            <img src={counter.imageUrl}></img>
                        </Counter>
                    )
                }
            </div> 
        );
    }
}
 
export default Counters;