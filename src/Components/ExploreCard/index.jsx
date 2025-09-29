import React from 'react'
import Buttons from '../Button/button'

const ExploreCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className='explore-card'>
            <span>{`0${data.id} —— ${data.room}`}</span>
            <h3>{data.title}</h3>
            <div className='explore-card-button'>
                <Buttons variant="quaternary" text="→" />
            </div>
        </div>
    )
}

export default ExploreCard;