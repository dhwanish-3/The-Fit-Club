import React from "react";
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import { Link } from "react-scroll/modules";

const Programs=()=>{
    return (
        <div className="Programs" id="Programs">
            {/* header */}
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>
            <div className="program-categories">
                {programsData.map((program,index)=>(
                    <div key={index} className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>
                                <Link to="Join" spy={true} smooth={true}>Join Now</Link>
                            </span>
                            <Link to="Join" spy={true} smooth={true}>
                                <img className="right-arrow" src={RightArrow} alt="" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;