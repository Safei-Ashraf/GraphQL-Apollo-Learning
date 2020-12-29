import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

 class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = {title: '', lyrics: ''};
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.mutate({
            variables:{
                title: this.state.title,
            }
        });
    this.setState({title: ''});
    }

    render() {
        return (
            <div className="container">
                <h3>Create A Song</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
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

const mutation = gql`mutation AddSong($title: String){
    addSong(title: $title){
    id,
    title
    }
}`;
export default graphql (mutation) (SongCreate);
