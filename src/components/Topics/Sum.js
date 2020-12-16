import { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirstNum(number1) {
        this.setState({ number1: parseInt(number1) });
    }

    handleSecondNum(number2) {
        this.setState({ number2: parseInt(number2) });
    }

    addNumbers(number1, number2) {
        let sum = number1 + number2;
        this.setState({ sum: sum });
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.handleFirstNum(e.target.value)} />
                <input className="inputLine" onChange={e => this.handleSecondNum(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum:{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;