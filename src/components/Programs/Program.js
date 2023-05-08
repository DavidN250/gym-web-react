import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

function Program() {
    return (
        <div className="section-programs" id='programs'>
         <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
         </div>

         <div className="program-categories">
            {programsData.map((program) => (
                <div className="category" key={program.heading}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join now</span> <img src={rightArrow} alt='' /></div>
                </div>
            ))}
         </div>
        </div>
    )
}

export default Program
