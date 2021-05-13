import React, { Component } from 'react'
import C from './C'


class A extends  Component {
  state={
      hh: ""
  }


    kk =(gg)=> {
        console.log(gg);
        this.setState({
            hh: gg
        });
    }

    render() {

        return(
            <div>
                
              <p>{this.state.hh}</p>
                <C  text={this.kk} />
            </div>
        )
    }
}


export default A;