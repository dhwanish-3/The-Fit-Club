import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans=()=>{
    return (
        <div className="Plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
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
                        <div className="pricing">
                            <span>Rs.{plan.price*10}</span>
                        <span>/month</span>
                        </div>                        
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

export default Plans;