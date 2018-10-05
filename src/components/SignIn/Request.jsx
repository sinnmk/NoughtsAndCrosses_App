import React, {Component} from 'react';
import axios from 'axois';

export default class Request extends Component{
    constructor(props){
        super(props);
        state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`{this.props}.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render(){
        return (
            <div>
                <h1>{`/r/${this.props}`}</h1>
                <ul>
                    {this.state.posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

