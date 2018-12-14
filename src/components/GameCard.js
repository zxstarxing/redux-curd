import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
class GameCard extends PureComponent {
    render() {
        return (
            <div className="ui card">
                <a className="image" href="#"><img src={this.props.url} /></a>
                <div className="content">
                    <a className="header" href="#">{this.props.title}</a>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/game/${this.props._id}`} className="ui basic green button">Edit</Link>
                        <div className="ui basic red button" onClick={() => { this.props.deleteGame(this.props._id) }}>Delete</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GameCard;