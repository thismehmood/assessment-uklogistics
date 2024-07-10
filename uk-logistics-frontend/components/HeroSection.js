'use client';
import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Slider = dynamic(() => import('react-slick'), {ssr: false});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="hero-section h-96">
      <Slider {...settings}>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/03/15/66/40/360_F_315664059_3U5rIfjwAR5b2rIlJdchwl5JsbE8uljn.jpg"
            alt="UK Logistics 1"
            className="w-full h-[500px]"
            style={{objectFit: 'fill'}}
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1266958681/photo/global-business-logistics-import-export-background-and-container-cargo-freight-ship-transport.jpg?s=612x612&w=0&k=20&c=Oom7C2rhYYhA7PKGSBQ1B6ZJaanfRtp3o0B5VE_0cyA="
            alt="UK Logistics 2"
            className="w-full h-[500px]"
            style={{objectFit: 'fill'}}
          />
        </div>
        <div>
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20151009045712-Logistics.jpeg"
            alt="UK Logistics 3"
            className="w-full h-[500px]"
            style={{objectFit: 'fill'}}
          />
        </div>
      </Slider>
    </div>
  );
}
