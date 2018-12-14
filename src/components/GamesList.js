import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load_games,remove_game } from '../actions';
import GameCard from './GameCard';
import classnames from 'classnames';

class GameList extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
            error: '',
            isLoaded: ''
        }
    }
    componentDidMount() {
        this.props.load_games();
    }
    handleDelete=(id)=>{
        this.props.remove_game(id).then(
            (response)=>{},
            (error)=>console.log(error)
        )
    }
    
    render() {

        let { games } = this.props.games;
        return (
            <div className={classnames('ui', 'four', 'cards')}>
                {
                    games.map((item) => (<GameCard key={item._id} deleteGame={this.handleDelete} {...item}></GameCard>))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}


export default connect(mapStateToProps, { load_games,remove_game })(GameList);