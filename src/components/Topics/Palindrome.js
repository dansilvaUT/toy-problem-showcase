import { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    isPalindrome(str) {
        let palindrome = this.state.palindrome;
        let word = str.split('').reverse().join('');
        if (word === str) {
            palindrome = 'True';
        } else {
            palindrome = 'False';
        }
        this.setState({ palindrome: palindrome });
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => { this.isPalindrome(this.state.userInput) }}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;