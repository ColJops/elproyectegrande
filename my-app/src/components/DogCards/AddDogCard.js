import Dog from './Dog';
import DogInfo from "./DogInfo";


const AddDogCard = ({ dogs, onDelete, onAdd }) => {

    return(
        <div>{dogs.map((dog) => (
            <Dog key={dog.id} dog={dog} onDelete={onDelete} onAdd={onAdd} />
        ))}</div>

    )
}
export default AddDogCard