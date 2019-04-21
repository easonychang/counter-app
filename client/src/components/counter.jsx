import React, { Component } from 'react';


class Counter extends Component {

    state = {
        //value: this.props.counter.value,
        //tags: ['tag1', 'tag2', 'tag3']
    };

    /*
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */

    /*
    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags!</p>;
        }else{
            return <ul> {this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>;
        }
    }
    */

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);

        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log("Counter - Unmount");
    }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({value: this.props.counter.value + 1 });
    }

    render() { 

        console.log("Counter - Rendered");

        //console.log('props', this.props);
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }


}
 
export default Counter;