import React, { Component } from 'react';

class Favourites extends Component{
    render(){
        let classes = "btn btn-success btn-md m-2 fa fa-star";
        if(!this.props.liked) {
            classes+='-o';
        }
        
        return (<i onClick={this.props.onFavToggle} className={classes} aria-hidden="true"></i>)
    }
}
export default Favourites;