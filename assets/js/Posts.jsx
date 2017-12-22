import React from 'react'
import getPosts from './mockApis/getPosts'

export default function Posts({ match }) {
    const posts = getPosts().map((post) => {
        return (
            <span key={post.id}>
                <p>{ post.title }</p>
                <p>{ post.body }</p>
            </span>
        )
    })

    return (
        <div>
            <h2>{ match.params.cl }</h2>
            { posts }
        </div>
    )
}
