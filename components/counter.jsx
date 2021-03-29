import React, { Component } from 'react';

class Counter extends Component {
    
    // styles={
    //     fontSize:'20px',
    //     fontWeight:"bold"
    // };
    // renderTags(){
    //     if(this.state.tags.length===0) return <p>There are no tags!</p>;
    //     return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>

    // }
    // constructor(){  //instead use arrow function whic binds the this
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
    
    render() { 
        return (      
        <div>    
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
           {/* {this.state.tags.length===0 && 'Please create a new tag!'}  */}
           {/* {this.renderTags()} */}
        </div>
        );
    }
    getBadgeClasses(){
    let classes="badge m-2 badge-";
        classes+=(this.props.counter.value===0) ? "warning" :"primary";
        return classes;
    }
    formatCount(){
        const {value}=this.props.counter;
        return value===0?<h1>Zero</h1>:value;
    }
}



export default Counter;

