import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function EditBoba() {
    const [form, setForm] = useState({
        name: '',
        price: 0,
        description:''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getBoba = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boba/${id}`)
                // console.log(response.data)
                setForm(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBoba()
    }, [])

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // axios.put/.post('url', data for the request body)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/boba/${id}`, form)
            //navigate back to the details page for this bounty
            navigate(`/bobas/${id}`)
        } catch (err) {
            console.warn(err)
            if(err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>Edit Boba Drink:</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={form.name}
                        placeholder='Boba drink name...'
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor='reward'>Price:</label>
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
                <button type='submit'>Submit Edits</button>
            </form>

            <Link to={`/bobas/${id}`}>Go Back</Link>
        </div>
    )
}