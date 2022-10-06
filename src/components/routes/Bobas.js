import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Bobas() {
    // bounties from the backend
    const [bobas, setBobas] = useState ([])
    // state for messages from the backend 
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getBobas = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boba`)
                // console.log(response.data)
                // TODO sort by date and only show the most recent bounties
                setBobas(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.message)
                }
            }
        }

        getBobas()
    }, []) //only fire on page load

    const bobaLinks = bobas.map(boba => {
        return (
            <div key={boba._id}>
                <Link to={`/bobas/${boba._id}`}>{boba.name}</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>All Logged Boba Drinks:</h1>

            {/* most recent TODO: sort by date */}
            {bobaLinks}

            <p>{errorMessage}</p>

        </div>
    )
}