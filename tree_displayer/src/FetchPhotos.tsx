import { useState, useEffect } from "react";

export function FetchPhotos(){

    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPhotos = async() => {
            try{
                const response = await fetch("../photos/photos.json")
                const result = await response.json();
                setPhotos(result);
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchPhotos()
        console.log("DATA", photos)
    }, [])


    return (
        <>
        {isLoading ?
            <div>
                <h1>Loading</h1>
            </div>
        : <div>
            <h1>Not Loading</h1>
            <p></p>
        </div>
        }           

        </>
    )
}