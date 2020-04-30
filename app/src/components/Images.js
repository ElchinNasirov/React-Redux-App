import React from "react";
import { connect } from "react-redux";
import { getImage } from "../actions";

const Images = (props) => {
    if (props.error !== "")
        return (
            <div>
                <h2> {props.error} </h2>
                <button onClick={props.getImage} > Get a new Dog Image </button>
            </div>
        );
    if (props.isFetching) {
        return <h2> Getting a picture... </h2>
    }
    else {
        return (
            <div>
                <p>
                    <img className="img" src={props.pic} alt="random dog image" />
                </p>
                <button onClick={props.getImage} > Get a new Dog Image </button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        pic: state.pic,
        error: state.error
    }
}

export default connect(mapStateToProps, { getImage })(Images);