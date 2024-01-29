import { useState } from "react";

type PhotoData = {
    id: number;
    title: string;
    url: string;
    description: string;
  };
  
  export function Slider({ photos }: { photos: PhotoData[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPhoto = photos[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      };


    return (
      <>
        <div>
            <div key={currentPhoto.id}>
                <h1>{currentPhoto.title}</h1>
                <img height={300} width={600} src={currentPhoto.url} alt={currentPhoto.description} />
            </div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
        </div>
      </>
    );
  }