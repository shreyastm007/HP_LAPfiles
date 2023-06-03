import React from "react";

function withCounter(PassedComponent,initionalCount=0){

class WrappedComponent extends React.Component{
    state={
        count:initionalCount
    }

    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <PassedComponent
            count={this.state.count}
            increment={this.incrementCount}
            decrement={this.decrement}
            {...this.props}
            
            />
        )
    }
}
return WrappedComponent
}

export default withCounter

