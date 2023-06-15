import React from "react";
import siad from "../../assets/img/siad.png";
import { Link } from "react-router-dom";

function Lessons() {

    return (
        <div>
            <img className='lessons-img' src={siad} alt="dog"/>
            <Link to="/slider"><h6>Daj łapę</h6></Link>
        </div>

    );

}

export default Lessons;