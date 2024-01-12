import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";


export class Content extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
        isLoaded: false,
        posts: ''
        }
    }

    componentDidMount() {
        console.log('Component mounted')
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }  
    
    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        console.log(name)
        const filteredPost = savedPosts.filter(post => {
          return post.name.toLowerCase().includes(name)
      })
       
      this.setState({
        posts: filteredPost
    })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}> 
                    <h1>My Photos</h1>
                    <form>
                    <input
                        id="searchInput"
                        onChange={(event) => this.handleChange(event)}
                        type="search"
                        placeholder="search names..."
                    />
                       <h4>posts found {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    
                    {/* Part 1: Creating the map function */}

                        {/* {
                    savedPosts.map((post)=>{
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random"/>
                                <p>{post.description}</p>
                                </div>
                        })
                    } */}


                    {/* Part 2: Creating a child component */}

                    {/* <PostItem savedPosts={savedPosts} /> */}

                    {/* Loader Challenge: render the PostItem component vs the Loader component based on the state of isLoaded */}
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }

                </div>
            </div>
        )
    }
}

export default Content