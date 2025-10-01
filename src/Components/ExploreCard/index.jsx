import React from 'react'
import Buttons from '../Button/button'

const ExploreCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className='explore-card'>
            <div className='explore-text'>
                <span>{`0${data.id} —— ${data.room}`}</span>
                <h5>{data.title}</h5>
            </div>
            <div className='explore-card-button'>
                <Buttons variant="quaternary" text="→" />
            </div>
        </div>
    )
}

export default ExploreCard;