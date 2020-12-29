import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/addSong';


 class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = {title: '', lyrics: ''};
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.mutate({
            variables:{title: this.state.title},
            refetchQueries:[{query : query}]
        }).then(()=>hashHistory.push('/'))    
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Link to="/">Back</Link>
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
            </div>
        )
    }
}


export default graphql (mutation) (SongCreate);
