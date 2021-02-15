import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import shortid from 'shortid';

function Stars(props) {

    let {countStars} = props

    const values = [1,2,3,4,5]


    return (
        <ul>
        {values.slice(0, countStars).map((item, index) => <li key = {shortid.generate()}><StarIcon  /> </li>)}
        </ul>
    )
}

Stars.defaultProps = {
    countStars: 0,
}

export default Stars
