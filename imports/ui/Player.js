import React from 'react';
import { Players } from './../api/players'
import PropTypes from 'prop-types'

export default class Player extends React.Component {

    render() {
        let player = this.props.player

        let className = `item item--position-${player.rank}`

        return (<div className = {className}>
                    <div className="player">
                        <div>
                            <h3 className="player__name" key={player._id}>{player.name}</h3>
                            <p className="player__stats" key={player._id}>
                            {player.position} place - {player.score} point(s)</p>
                        </div>
                        <div className="player__actions">
                            <button className="button button--round" 
                                    onClick={() => (Players.remove({ _id: player._id }))}
                                    >x</button>
                            <button className="button button--round" 
                                    onClick={() => (Players.update({ _id: player._id }, { $inc: { score: 1 } }))}
                                    >+</button>
                            <button className="button button--round" 
                                    onClick={() => (Players.update({ _id: player._id }, { $inc: { score: -1 } }))}
                                    >-</button>
                        </div>
                    </div>
                </div>

        );
    }

  
};

Player.propTypes = {
    player: PropTypes.object.isRequired
}