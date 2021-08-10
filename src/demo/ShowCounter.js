import React from 'react';
import { connect } from 'react-redux'

function ShowCounter(props) {
    
    return (
         <h2>
             Count: {props.value}
             Massage: {props.message}
         </h2>
    )
}

const mapStateToProps = (state) =>{
return {
    value: state.count,
    message: state.message
};
};

// const mapDispatchToProps = ()=>{
    
// }


export default connect(mapStateToProps)(ShowCounter);