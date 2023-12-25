import React, { useState, useEffect } from 'react';
import '../Stylesheets/slider.css'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) n = 1;
    if (n < 1) n = slides.length;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';
    setSlideIndex(n)
  };

  return (
    <div className='slideshow-parent'>
    <div className="slideshow-container">
      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <div className="mySlides fade">
        <div className="numbertext">1 / 5</div>
        <img src={img1} style={{ height: '100%' }} alt="Slide 1" />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 5</div>
        <img src={img2} style={{ height: '100%' }} alt="Slide 2" />
      </div>
      <div className="mySlides fade">
        <div className="numbertext">3 / 5</div>
        <img src={img3} style={{ height: '100%' }} alt="Slide 3" />
      </div>
      <div className="mySlides fade">
        <div className="numbertext">4 / 5</div>
        <img src={img4} style={{ height: '100%' }} alt="Slide 4" />
      </div>
      <div className="mySlides fade">
        <div className="numbertext">5 / 5</div>
        <img src={img5} style={{ height: '100%' }} alt="Slide 5" />
      </div>

      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>
    </div>
    <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
    </div>

    </div>
    
  );
};

export default Slideshow;