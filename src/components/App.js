// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => handleImage(data.message));
  }, []);

  function handleImage(data) {
    setImage(data);
    setIsLoaded(true);
  }

  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div>
      <img alt="A Random Dog" src={image}></img>
    </div>
  );
}

export default App;
