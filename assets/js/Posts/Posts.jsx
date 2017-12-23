import React from 'react'
import getPosts from '../mockApis/getPosts'
import css from './post.css'

export default function Posts({ match }) {
    const posts = getPosts().map((post) => {
        return (
            <div key={post.id} className='post'>
                <p>{ post.title }</p>
                <p>{ post.body }</p>
            </div>
        )
    })

    return (
        <div>
            <h2>{ match.params.cl }</h2>
            { posts }
        </div>
    )
}
