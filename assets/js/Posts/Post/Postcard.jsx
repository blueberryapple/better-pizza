import React, { createElement } from 'react'
import css from './postcard.css'
import remark from 'remark'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import rehype2react from 'rehype-react'

export default function Post({ title, body, id }) {
    const processor = remark()
        .use(math)
        .use(remark2rehype)
        .use(katex)
        .use(rehype2react, { createElement })

    return (
        <div className='post' id={id}>
            <p>{ title }</p>
            { processor.processSync(body).contents }
        </div>
    )
}
