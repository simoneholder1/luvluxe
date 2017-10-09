import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';


class componentName extends Component {
constructor(){
    super()
    this.State={
        search:""
    }
}

componentWillMount(){
    axios.get('/api/search').then((res)=>{
        this.setState({
            search:""
        })
        
    })
}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default componentName;