import React, { Component } from "react";
import ReactDOM from "react-dom";
 
export default class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGood = event => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }
        )
        );
    };

    handleNeutral = event => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }
        )
        );
    };

    handleBad = event => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }
        )
        );
    };

    countTotalFeedback = () => {
        
    };


    countPositiveFeedback() {

    };

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" onClick={this.handleGood}>Good</button>
                <button type="button" onClick={this.handleNeutral}>Neutral</button>
                <button type="button" onClick={this.handleBad}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.state.total}</p>
                <p>Positive feedback:</p>
            </div>


        )
    }
}
