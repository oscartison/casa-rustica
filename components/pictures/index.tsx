import { useTranslation } from "next-i18next";
import * as React from 'react';
import styled from "styled-components";
import Image1 from "../../app/images/house/1.jpeg";
import Image2 from "../../app/images/house/2.jpeg";
import Image3 from "../../app/images/house/3.jpeg";
import Image4 from "../../app/images/house/4.jpeg";
import Image5 from "../../app/images/house/5.jpeg";
import Image6 from "../../app/images/house/6.jpeg";
import Image7 from "../../app/images/house/7.jpeg";
import Image8 from "../../app/images/house/8.jpeg";
import Image8a from "../../app/images/house/8a.jpeg";
import Image8b from "../../app/images/house/8b.jpeg";
import Image9 from "../../app/images/house/9.jpeg";
import Image10 from "../../app/images/house/10.jpeg";
import Image11 from "../../app/images/house/11.jpeg";
import Image12 from "../../app/images/house/12.jpeg";
import Image13 from "../../app/images/house/13.jpeg";
import Image14 from "../../app/images/house/14.jpeg";
import Image15 from "../../app/images/house/15.jpeg";
import Image17 from "../../app/images/house/17.jpeg";
import Image17a from "../../app/images/house/17.jpeg";
import Image18a from "../../app/images/house/18a.jpeg";
import Image18 from "../../app/images/house/18.jpeg";
import Image19 from "../../app/images/house/19.jpeg";
import { Container, Title } from "@mantine/core";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";



const StContainer = styled(Container)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  .slider {
   width: 1000px;
   max-width: calc(100vw - 32px);
  }
`;


const Pictures = () => {
  const { t } = useTranslation("home");
  const myRef = React.useRef(null)
  const executeScroll = () => {
    if (myRef && myRef.current) {
      window.scrollTo({top: (myRef.current as any).offsetTop - 800,
        behavior: "smooth"})
    }
  }


const images = [
  {
    original: Image1.src,
    thumbnail: Image1.src,
  },
  {
    original: Image2.src,
    thumbnail: Image2.src
  },
  {
    original: Image3.src,
    thumbnail: Image3.src
  },
  {
    original: Image4.src,
    thumbnail: Image4.src
  },
  {
    original: Image5.src,
    thumbnail: Image5.src
  },
  {
    original: Image6.src,
    thumbnail: Image6.src
  },
  {
    original: Image7.src,
    thumbnail: Image7.src
  },
  {
    original: Image8.src,
    thumbnail: Image8.src
  },
  {
    original: Image8a.src,
    thumbnail: Image8a.src
  },
  {
    original: Image8b.src,
    thumbnail: Image8b.src
  },
  {
    original: Image9.src,
    thumbnail: Image9.src
  }
];

const roomImages = [
  {
    original: Image10.src,
    thumbnail: Image10.src
  },
  {
    original: Image11.src,
    thumbnail: Image11.src
  },
  {
    original: Image12.src,
    thumbnail: Image12.src
  },
  {
    original: Image13.src,
    thumbnail: Image13.src
  },
  {
    original: Image14.src,
    thumbnail: Image14.src
  },
  {
    original: Image15.src,
    thumbnail: Image15.src
  },
  {
    original: Image17.src,
    thumbnail: Image17.src
  },
  {
    original: Image17a.src,
    thumbnail: Image17a.src
  },
  {
    original: Image18.src,
    thumbnail: Image18.src
  },
  {
    original: Image18a.src,
    thumbnail: Image18a.src
  },
  {
    original: Image19.src,
    thumbnail: Image19.src
  }
];


  const change = (index:number) => {
    if(index === 0) {
      executeScroll();
    }
  }

  return (
    <StContainer >
      <Title>{t("house")}</Title>
      <ImageGallery additionalClass="slider" onSlide={change} items={images} />
      <Title >{t("rooms")}</Title>
      <ImageGallery additionalClass="slider" items={roomImages} />
      <div  ref={myRef}/>
    </StContainer>
  );
};

export default Pictures;
