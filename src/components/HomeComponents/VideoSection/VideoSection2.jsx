import React from 'react'
import './VideoSection.css';
import Button from '../../Button/Button';
import foodServe from '../../../assets/foodServe.jpg'
const VideoSection2 = () => {
    return (
        <div className='videoSection2Container container-fluid'>
            <img src={foodServe} alt="" />
            <div className="video-sec-2Content p-5">
                <h1>
                    GET SPECIAL OFFER<br/> <span>DISCOUNT 50%</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br/> commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br/> penatibus et magnis dis parturient montes.</p>
                    <div className="button"> 
                        <Button title="ORDER NOW" classname='samebutton' />
                    </div>
            </div>
        </div>
    )
}

export default VideoSection2
