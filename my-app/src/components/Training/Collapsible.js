import React, {useState} from "react";


function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapsible">
            <button  onClick={() => setIsOpen(!isOpen)}> <h5>{props.label}</h5> </button>
            {isOpen && <div className='classname'> {props.children} </div>}
        </div>

    );

}

export default Collapsible;