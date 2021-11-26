import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/MainComponent';
import './DragAPI';
import { IMAGES } from './data/onlyImages';
function App() {


  const [imgsLoaded, setImgsLoaded] = useState(true) 
  const cacheImages = async (imgArray) => {
    const promises =  imgArray.map(src => {
      return new Promise(function(resolve, reject) {

        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
        console.log(img.src);
      });
    });

     await Promise.all(promises);
      setImgsLoaded(true);

   
  }

  useEffect(() => {
   // cacheImages(IMAGES);
    }, []);
  

    if(imgsLoaded)
    {
      return (
                <Main />
    )
    }
    else {
      return (
        <>
        <h1>wait</h1>
        </>
      )
    }
 

}

export default App;
