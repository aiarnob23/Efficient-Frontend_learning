import { useRef, useState } from 'react';
import './Hero.scss';
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasclicked , setHasClicked] = useState(false);
  const [loading, isLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex)=>prevIndex+1)
  }
  
  const getVideoSrc = (index)=>`videos/hero-${index}.mp4`;

  return (
    <div className="hero-container relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-0 h-dvh w-screen overflow-hidden bg-blue-75">
            <div>
                <div onClick={handleMiniVdClick} className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div>
                      <video
                      ref={nextVdRef}
                      src={getVideoSrc(currentIndex+1)}
                      loop
                      muted
                      id='current-video'
                      className='size-64 scale-150'
                      />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;