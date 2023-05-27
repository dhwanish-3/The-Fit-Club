import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

export const Plans=()=>{
    return (
        <div className="Plans">
            <div className="programs-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plan,index)=>(
                    <div className="plan" key={index}>
                        <svg>{plan.icon}</svg>
                        <span>{plan.name}</span>
                        <span>Rs. {plan.price*10}</span>
                        <div className="features">
                            {plan.features.map((feature,index)=>(
                                <div className="feature" key={index}>
                                    <img src={whiteTick} alt=''/>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits {`->`}</span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}