import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Boba() {
    const [boba, setBoba] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getBoba = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boba/${id}`)
                // console.log(response.data)
                setBoba(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBoba()
    }, [])

    const handleDelete = async () => {
        try {
            //axios to the backend to delete this bounty
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boba/${id}`)
            //after deletion, navigate back to /bounties
            navigate('/bobas')
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }


    return (
        <div>
            <h1>Boba Description</h1>

            <p>{errorMessage}</p>

            <div>
                <Link to={`/bobas/${id}/edit`}>
                    <button>Edit this Boba Drink Log</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>

            <div>
                <h2>{boba.name}</h2>

                <p>price: {boba.price}</p>

                <p>description: {boba.description}</p>

            </div>
        </div>
    )
}