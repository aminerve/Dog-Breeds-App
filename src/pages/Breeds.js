import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";



export default function Breeds() {
    const [dogs, setDogs] = useState([])
    const params = useParams();
    console.log(params);

    useEffect(() =>{
        const fetchDogData = async() =>{
            try {
                const res = await fetch('https://api.thedogapi.com/v1/breeds')
                const data = await res.json()
                setDogs(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchDogData()
    }, [])


    return <h2>Breeds Page</h2>
}