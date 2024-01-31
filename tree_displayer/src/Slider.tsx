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
        <div className="displayer">
            <div key={currentPhoto.id}>
                <h1 className="tree-title">{currentPhoto.title}</h1>
                <img className="image" height={400} width={600} src={currentPhoto.url} alt={currentPhoto.description} />
            </div>
            <div className="buttons-container">
                <button className="navigation-button" onClick={handlePrev}>Previous</button>
                <button className="navigation-button" onClick={handleNext}>Next</button>
            </div>
        </div>
      </>
    );
  }