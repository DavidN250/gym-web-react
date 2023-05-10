import React from 'react'
import './Join.css'

function Join() {
    return (
        <div className="section-join" id="join">
            <div className="left-j">
            <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span> YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" method="post" className="email-container">
                    <input type="text" name="email-address" id="" placeholder='Enter Your Email' />
                    <button type="submit" className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
