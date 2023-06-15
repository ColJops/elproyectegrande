
import {useState} from "react";

const AddDog = ({onAdd}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add dog name')
            return
        }

        onAdd({ name, breed, age})

        setName('')
        setBreed('')
        setAge('')
    }

    return (
        <form className="add-dog" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Imię</label><br/>
                <input type='text'  value={name} onChange={(e) => setName(e.target.value)}/><br/>
                <label>Rasa</label><br/>
                <input type='text'  value={breed} onChange={(e) => setBreed(e.target.value)}/><br/>
                <label>Wiek</label><br/>
                <input type='text'  value={age} onChange={(e) => setAge(e.target.value)}/><br/>
            </div>
            <input type='submit' value='ZAPISZ' className='btn btn-block'/>
        </form>
    )
}

export default AddDog