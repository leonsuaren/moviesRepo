import React from 'react';
import ReactDOM from 'react-dom';
import {PERSON_POPULAR_URL} from '../../config';


export class Actors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch( 'https://api.themoviedb.org/3/person/popular?api_key=bb7ec9110715fe73fc8a8c2b79f89a51&language=en-US' )
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div> <h1> Please wait some time.... </h1> </div> ;
        return (
            <div className="Actors">
                <h1>Actors</h1>
                <h1>{this.props.state}</h1>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Known for</th>
                </tr>
                </thead>

            </div>
        );
    }
}


