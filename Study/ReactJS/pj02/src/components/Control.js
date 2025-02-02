import React, { Component } from 'react'
import Search from './Search';
import Sort from './Sort';


export default class Control extends Component {
    render() {
        return (
            
        <div className="row mt-15">  
            <Search 
            search = {this.props.search}
            />

            <Sort sort = {this.props.sort} />
            
    </div> 


        )
    }
}
