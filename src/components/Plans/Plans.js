import React from 'react'
import './Plans.css'
import {plansData} from'../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

function Plans() {
    return (
        <div className="section-plans" id="plans">
            <div className="programs-header" style={{gap:'2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
                <span></span>
            </div>
            <div className="plans">
                {plansData.map((plan,id)=>(
                    <div className="plan" key={id}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature,id)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={id}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefit</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
