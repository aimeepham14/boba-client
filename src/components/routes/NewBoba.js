import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewBoba() {
    //state to hold our form
    const [form, setForm] = useState({
        name: '',
        price: 0,
        description:'',
    })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    //submit event handler
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boba`, form)
            //navigate back to /bounties to see the new bounty
            navigate('/bobas')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>Add a new Boba Drink:</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={form.name}
                        placeholder='Name of drink...'
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input
                        type='number'
                        id='price'
                        value={form.price}
                        onChange={e => setForm({ ...form, price: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input
                        type='text'
                        id='description'
                        value={form.description}
                        placeholder='Add a description...'
                        onChange={e => setForm({ ...form, description: e.target.value })}
                    />
                </div>

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}