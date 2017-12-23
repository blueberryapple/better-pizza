import React from 'react'
import { Link } from 'react-router-dom'
import getClasses from '../mockApis/getClasses'

export default function Classes(){
    const classes = getClasses().map((cl) => {
        return (
            <li key={cl}>
                <Link to={cl}>
                    { cl }
                </Link>
            </li>
        )
    })

    return (
        <div>
            <ul>
                { classes }
            </ul>
        </div>
    )
}
