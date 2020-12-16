import { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
            },
            {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
            },
            {
                name: 'Carly Armstrong',
                title: 'CEO',
            }],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    filterEmployees(prop) {
        let filteredArray = [];
        let objectArr = this.state.unFilteredArray;
        for (let i = 0; i < objectArr.length; i++) {
            if (objectArr[i].hasOwnProperty(prop)) {
                filteredArray.push(objectArr[i]);
            }
        }
        this.setState({
            filteredArray: filteredArray
        });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;