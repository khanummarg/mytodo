import { connect } from "react-redux";

function ShowCounter(props) {
  return <h2>Count: {props.count}</h2>;
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(ShowCounter);
