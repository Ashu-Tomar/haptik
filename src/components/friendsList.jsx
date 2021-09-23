import React, {Component} from 'react';
import { getFriends } from '../services/friendsMockData';
import Favourites from './favourites';
import '../css/custom.css';


class FriendList extends Component{

    state= {
        friends:getFriends(),
        pageSize:4,
        text:'',
    };
    // handleIncrement=e=>{
	// 	console.log("product", e);
    //     e.classList.add("lass");        
	// }
    onDelete=friend=>{
        const friends = this.state.friends.filter(c=> c.id!==friend.id);
        this.setState({friends});
    }
    handleKeyDown = e => {
        if (e.key === 'Enter') {      
            const newfriends=this.state.friends.push({id:'7',name:e.target.value});
		    this.setState({newfriends});
          }
    };


handleSearch = event => {
    let item = (event.target.value).toUpperCase();
    
    this.setState({
        text: event.target.value});
        let itemList = document.getElementsByClassName('searchResultRow');
        let i;
        for (i = 0; i < itemList.length; i++){
            let searchList = itemList[i].children[0].children[0].textContent;
            if(searchList.toUpperCase().includes(item)){
                itemList[i].style.display="flex";
            }else{
                itemList[i].style.display="none";
            }
        }
    };

    handleFav =(friend)=>{
        console.log("hii");
        const friends = [...this.state.friends];
        const index= friends.indexOf(friend);
        friends[index] = {...friends[index]};
        friends[index].liked = !friends[index].liked;
        this.setState({friends});
    }

    // ascSort = ()=>{
    //     let itemList = document.getElementsByClassName('searchResultRow');
    //     console.log("itemList", itemList);
        
    // }
  
    render(){
		return(	
			
			<React.Fragment>
				{/* <ul> {this.tags.map(tag => <li>{tag}</li>)}</ul> */}
                <div className="app-base">
                <div className="app-header">
                    <div className="component-header">Friend List</div>
                    {/* <span><i onClick={this.ascSort} className="fa fa-sort-alpha-asc" /></span>
                    <span><i onClick={this.descSort} className="fa fa-sort-alpha-desc" /></span> */}
                </div>
                <div className="flexComponent">
                <div className="flex50">
                <div className="component-search-input">
                        <div>
                        <input value={this.state.text} placeholder="Search Friend from List" onChange={this.handleSearch}/>
                        </div>
                    </div>
                </div>
                <div className="flex50">
                <div className="component-search-input">
                    <div className="addFriend">
                    <input type="text"
                    onKeyDown={this.handleKeyDown} 
                    placeholder="Type Name to Save New Friend"/>
                    </div>
                </div>
                </div>
                </div>        
                <div className="componentListresults">
                    {this.state.friends.map(friend => (
                    <div key={friend.id} className="searchResultRow copy-to-clipboard">
                        <div>
                            <div>  
                            <span className="title"><b>{friend.name}</b></span>        
                            </div> 
                            <div>  
                            <span>is your Friend</span>        
                            </div> 
                        </div>
                        <div className="row_action">
                            <Favourites liked={friend.liked} onFavToggle={()=>this.handleFav(friend)} />
                            {/* <button className="btn btn-success btn-md m-2" onClick={()=>this.handleIncrement()}><i className="fa fa-star-o" aria-hidden="true"></i></button> */}
                            <button className="btn btn-danger btn-md m-2" onClick={()=>this.onDelete(friend)} ><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>        
                    </div>
                    ))}
                </div>
            </div>
			</React.Fragment>
		)
	}
    // classesDecor(){
	// 	let classes = "badge-";
	// 	return classes+= this.state.count === 0? 'primary' : 'warning';
	// }
}
export default FriendList;