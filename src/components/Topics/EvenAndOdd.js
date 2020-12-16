import { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }
    //Check if input is even or odd and handle accordingly
    assingEvenAndOdds(userInput) {
        //Seperate long numbers by commas
        let splitArray = userInput.split(",");
        //create place holder variables to avoid modifying state object
        let evenNums = [];
        let oddNums = [];
        for (let i = 0; i < splitArray.length; i++) {
            if (splitArray[i] % 2 === 0) {
                evenNums.push(splitArray[i])
            } else {
                oddNums.push(splitArray[i]);

            }
        }
        this.setState({ evenArray: evenNums, oddArray: oddNums });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => { this.assingEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;