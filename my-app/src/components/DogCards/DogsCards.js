import React, {useState} from "react";
import AddDogCard from './AddDogCard';
import AddDog from './AddDog'
import Header from "./Header";
import DogInfo from "./DogInfo";

const DogsCards = () => {

    const [showAddTask, setShowAddTask ] = useState(false)
    const [dogs, setDogs] = useState(
        [
            {
                id: 1,
                name: 'Luna',
                breed: 'Beagle',
                age: 2,
            },
            {
                id: 2,
                name: 'Kokos',
                breed: 'Mieszaniec',
                age: 4,
            }
        ])



    const addTask = (dog) => {
        const id = Math.floor(Math.random() * 1000) +1
        const newDog = { id, ...dog }
        setDogs([...dogs, newDog])

    }


    const deleteDog = (id) => {
        setDogs(dogs.filter((dog) => dog.id !== id))
    }


    return(

        <div className='dogs-cards'>
            <Header onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}/>
            {showAddTask && <AddDog onAdd={addTask}/>}
        <AddDogCard dogs={dogs} onDelete={deleteDog}/>
        </div>
    )
}

export default DogsCards;