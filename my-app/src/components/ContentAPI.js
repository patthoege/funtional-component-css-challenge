import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";


export class Content extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: [],
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }
    
    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPost = this.state.savedPosts.filter(post => {
          return post.user.toLowerCase().includes(name)
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
                        <PostItemAPI savedPosts={this.state.posts} />
                        : <Loader />
                    }

                </div>
            </div>
        )
    }
}

export default Content