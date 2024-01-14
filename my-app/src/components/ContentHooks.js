import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fecthedPosts, setFetchedPosts] = useState([]);

    useEffect(()=> {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}> 
                <h1>My Photos</h1>
                <form>
                    <input
                        id="searchInput"
                        onChange={(e)=>{handleChange(e)}}
                        type="search"
                        placeholder="search names..."
                    />
                    <h4>posts found {fecthedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItem savedPosts={fecthedPosts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks