import React, {Component} from 'react';
import './tweet.css';


function Tweet(props){
    return(
        <div className="tweet">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

// class Tweet extends Component(){
//     render(){
//         return(
//             <div className="tweet">
//                 <h2>{this.props.title}</h2>
//                 <p>{this.props.description}</p>
//             </div>
//         );
//     }
// }

// Tweet.propTypes = {
//     title: PropTypes.string,
//     description: PropTypes.string
// };

export default Tweet;