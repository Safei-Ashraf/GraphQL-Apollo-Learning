import React, { Component } from 'react'

export default class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = {title: '', lyrics: ''};
    }
    render() {
        return (
            <div className="container">
                <h3>Create A Song</h3>
                <form>
                    <label>Song Name:</label>
                    <input
                        type="text"
                        onChange={(e)=>{ this.setState({title : e.target.value})}}
                        value={this.state.title}
                    />
                </form>   
            </div>
        )
    }
}
