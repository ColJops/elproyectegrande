import {FaTimes} from "react-icons/fa";
import DogInfo from "./DogInfo";

const Dog = ({ dog, onDelete }) => {
    return(
        <div className='dog-card'>
            <h1 style={{ fontSize: '40px', }}>{dog.name} <FaTimes onClick={() => onDelete(dog.id)}/></h1>
            <p>Rasa: {dog.breed} lat: {dog.age} </p>
        </div>
    )
}
export default Dog