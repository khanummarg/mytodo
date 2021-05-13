import React, { Component } from 'react'


class C extends Component {
    
    state ={
        name: "",
        
    }
    handleChange =(e) => {
        this.setState({
            name: e.target.value
        })
    }
   
    myF = () => {
        this.setState({
            name: ""
        });
    }

    render() {
        
        return(
           
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button type="button" onClick={()=>{this.props.text(this.state.name); this.myF()}}>Send to parent</button>
                
            </div>
        )
    }
}


export default C;