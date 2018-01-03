import React, { createElement} from 'react'
import Post from './Post/Postcard.jsx'
import { getPosts } from '../mockApi'
import css from './posts.css'
import katexCss from 'katex/dist/katex.css'

export default function Posts({ match }) {
    const posts = getPosts().map((post) => <Post {...post} key={post.id} />)

    return (
        <div className="forum">
            <h2>{ match.params.cl }</h2>
            <div className="search-container">
                <input type="text" label="search here!" id="search" />
            </div>
            { posts }
        </div>
    )
}
