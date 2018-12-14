import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_game, fetch_game, update_game } from '../actions';
import classname from 'classnames';


class GameForm extends Component {
    state = {
        _id: this.props.game ? this.props.game._id : null,
        title: this.props.game ? this.props.game.title : '',
        url: this.props.game ? this.props.game.url : '',
        error: '',
        isloading: false,
        validate: new Map()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.game) {
            this.setState({
                _id: nextProps.game._id,
                title: nextProps.game.title,
                url: nextProps.game.url
            });
        }
    }
    componentDidMount() {
        const { match } = this.props;
        if (match.params.id && match.params.id.toLowerCase() !== "new") {
            this.props.fetch_game(match.params.id);
        }
        else {
            this.setState({
                _id: null,
                title: '',
                url: ''
            })
        }
    }
    validate = () => {

        let { title, url } = this.state;
        let validateMap = new Map();
        if (!title) {
            validateMap.set('title', '标题不能为空');
        }
        else {
            validateMap.delete('title');
        }
        if (!url) {
            validateMap.set('url', '图片地址不能为空')
        }
        this.setState({
            validate: validateMap
        });
        return validateMap.size
    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.validate();
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state._id) {
            const { title, url } = this.state;
            this.props.update_game(this.state._id, { title, url }).then(
                (response) => {
                    this.props.history.push('/games');
                },
                (error) => console.log(error)
            )
        }
        else {
            if (this.validate() === 0) {
                this.props.add_game({ title: this.state.title, url: this.state.url }).then(
                    (response) => {
                        if (response.action.payload.status) {
                            this.props.history.push('/games');
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            }
        }

    }
    render() {
        return (
            <form className={classname('ui', 'form', { loading: this.props.isloading }, { error: true })} onSubmit={this.handleSubmit}>
                <h1>Game Form</h1>
                <div className={classname('field', { error: this.state.validate.has("title") })}>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="title" />
                    {this.state.validate.has("title") && (<div className="ui visible message">{this.state.validate.get("title")}</div>)}
                </div>
                <div className={classname('field', { error: this.state.validate.has("url") })}>
                    <label htmlFor="url">url</label>
                    <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} placeholder="url" />
                    {this.state.validate.has("url") && (<div className="ui visible message">{this.state.validate.get("url")}</div>)}
                </div>
                <div className="field">
                    {!!this.state.url && (<img src={this.state.url} className="ui small bordered image" alt="this is image" />)}
                </div>
                <div className="field">
                    <button type="submit" className="ui button primary">Save</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state, props) => {
    console.log(state);
    const { match } = props;
    let { games: { isLoaded, games: gameList, error } } = state;
    let game = (match.params.id && match.params.id.toLowerCase() !== "new") ? gameList.find((item) => item._id == match.params.id) : {};
    return {
        isloading: isLoaded,
        game
    }
}

export default connect(mapStateToProps, { add_game, fetch_game, update_game })(GameForm);