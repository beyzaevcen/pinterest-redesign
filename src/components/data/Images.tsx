import React, { useEffect, useState } from "react";
import "./Images.css"; // Import CSS for styling (create this file if it doesn't exist)

interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const Images = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?client_id=fFSyfT045wBN4Mw1ZdYfNA0wQw5A23ABXrSphgjzLlU&count=20`
        ); // Fetching more photos to ensure we have enough for a full layout
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data: Photo[] = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div className="image-grid">
      {/* Render photos in a grid layout */}
      {photos.map((photo) => (
        <div key={photo.id} className="grid-item">
          <img src={photo.urls.regular} alt={photo.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default Images;
