import React from 'react';
import { Component } from 'react';


const withCounter = (WrappedComponent, incrementCount) => {
class WithCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
           return { count: prevState.count + incrementCount}
        })
    }

    render() {

        return (
             <WrappedComponent 
             count = {this.state.count}
             incrementCount = {this.incrementCount}
             {...this.props}
             />
           
        )

    }
}
return WithCounter;
}

export default withCounter;