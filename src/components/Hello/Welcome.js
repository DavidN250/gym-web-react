import React from 'react'
import './Welcome.css'
import Header from '../Header/Header'
import hello_image from '../../assets/hero_image.png'
import hello_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

function Welcome() {
    return (
        <div className="section-welcome">
            <div className="left-h">
                <Header/>

                {/* The Best fit ad */}
                <div className="best-ad">
                    <div></div>
                    <span>The best Fitness club in the town</span>
                </div>

                {/* Hello Heading */}
                <div className='welcome-heading'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>
                            Ideal Body
                        </span>
                    </div>
                    <div>
                        <span>
                            In here we will help you shape and build your ideal body and live up your life to the fullest
                        </span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="action-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join now</button>
                <div className="heart-rate">
                <img src={heart} alt="Heart" />
                <span>Heart rate</span>
                <span>116 BPM</span>
                </div>

                {/* Hello image */}

                <img src={hello_image} alt="WelcomeImage"  className='hello-image'/>
                <img src={hello_image_back} alt="BackGround" className='hello-image-back' />

                <div className="calories">
                    <img src={calories} alt="" />    
                    <div>
                        <span>Calories Burned</span>
                        <span>272 Kcal</span>
                    </div>               
                    
                </div>
            </div>
        </div>
    )
    }
export default Welcome
