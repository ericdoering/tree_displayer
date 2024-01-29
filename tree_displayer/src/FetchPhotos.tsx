import { useState, useEffect } from "react";
import { Slider } from "./Slider";

export function FetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("../photos/photos.json");
        const result = await response.json();
        const photoResult = result.photos
    
        setPhotos(photoResult);
        setIsLoading(false);

      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
    {isLoading ? <p>Loading ... </p>
      : <Slider photos={photos} /> 
    }
  </>
  );
}
