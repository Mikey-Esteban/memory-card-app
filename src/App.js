import React, { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card from './components/Card'
import Image1 from './assets/images/image1.jpg'
import Image2 from './assets/images/image2.jpg'
import Image3 from './assets/images/image3.jpg'
import Image4 from './assets/images/image4.jpg'
import Image5 from './assets/images/image5.jpg'
import Image6 from './assets/images/image6.jpg'
import Image7 from './assets/images/image7.jpg'
import Image8 from './assets/images/image8.jpg'
import Image9 from './assets/images/image9.jpg'
import Image10 from './assets/images/image10.jpg'
import Image11 from './assets/images/image11.jpg'
import Image12 from './assets/images/image12.jpg'
import Image13 from './assets/images/image13.jpg'
import Image14 from './assets/images/image14.jpg'
import Image15 from './assets/images/image15.jpg'
import Image16 from './assets/images/image16.jpg'
import Image17 from './assets/images/image17.jpg'

const App = () => {

  // Require is acting up, setting up importing images in assets/images folder
  const images = [ 'image1','image2','image3','image4','image5', 'image6', 'image7', 'image8', 'image9',
    'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17' ];
  const key = { 'image1':Image1, 'image2':Image2, 'image3':Image3, 'image4':Image4, 'image5':Image5,
                'image6':Image6, 'image7':Image7, 'image8':Image8, 'image9':Image9, 'image10':Image10,
                'image11':Image11, 'image12':Image12, 'image13':Image13, 'image14':Image14,
                'image15':Image15, 'image16':Image16, 'image17':Image17 };

  const [ pickedImages, setPickedImages ] = useState([]);
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(currentScore);
  const [ feedback, setFeedback ] = useState('');
  const [ feedbackSpacing, setFeedbackSpacing ] = useState('text-left');

  // set up prev arr
  const prevArrRef = useRef();
  useEffect( () => {
    prevArrRef.current = imagesArr;
  })

  const clickHandler = id => {
    if (pickedImages.includes(id)) {
      setFeedback('Oh no, you already picked that :/');
      currentScore > bestScore && setBestScore(currentScore);
      setCurrentScore(0);
      setPickedImages([]);
    } else {
      setFeedback('GOOD GUESS!');
      feedbackSpacing === 'text-left' ? setFeedbackSpacing('text-right') : setFeedbackSpacing('text-left') ;
      setCurrentScore(currentScore + 1);
      setPickedImages(pickedImages => [...pickedImages, id]);
    }
  }

  const grabSetOfImages = () => {
    while (true) {
      const imagesArr = [];

      while (imagesArr.length < 3) {
        let image = images[Math.floor(Math.random() * images.length)];
        // checker to not add same image twice
        // and image not in prevArr
        prevArrRef.current === undefined ?
          !imagesArr.includes(image) && imagesArr.push(image) :
          !prevArrRef.current.includes(image) && !imagesArr.includes(image) && imagesArr.push(image) ;
      }
      // checker to see if at least one image has not been picked yet
      for (let image of imagesArr) {
        if (!pickedImages.includes(image)) return imagesArr
      }
    }
  }

  const imagesArr = grabSetOfImages();

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <Banner currentScore={currentScore} bestScore={bestScore} feedback={feedback} feedbackSpacing={feedbackSpacing} />
      <div className="flex items-center justify-center my-10 space-x-8">
        {
          imagesArr.map( image => {
            return <Card key={image} id={image} src={key[image]} onClick={clickHandler} />
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default App;
