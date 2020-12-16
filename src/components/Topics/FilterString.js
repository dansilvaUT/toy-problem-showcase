import { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    filterNames(name) {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];
        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].includes(name)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState({ filteredArray: filteredArray });
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e => { this.handleChange(e.target.value) }} />
                <button className="confirmationButton" onClick={() => { this.filterNames(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;