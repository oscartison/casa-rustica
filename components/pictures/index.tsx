import { useTranslation } from "next-i18next";
import styled from "styled-components";
import Image1 from "../../app/images/house/1.jpeg";
import Image2 from "../../app/images/house/2.jpeg";
import Image4 from "../../app/images/house/4.jpeg";
import Image5 from "../../app/images/house/5.jpeg";
import Image6 from "../../app/images/house/6.jpeg";
import Image7 from "../../app/images/house/7.jpeg";
import Image8 from "../../app/images/house/8.jpeg";
import Image9 from "../../app/images/house/9.jpeg";
import Image10 from "../../app/images/house/10.jpeg";
import Image11 from "../../app/images/house/11.jpeg";
import Image12 from "../../app/images/house/12.jpeg";
import Image13 from "../../app/images/house/13.jpeg";
import Image14 from "../../app/images/house/14.jpeg";
import Image15 from "../../app/images/house/15.jpeg";
import Image16 from "../../app/images/house/16.jpeg";
import Image17 from "../../app/images/house/17.jpeg";
import Image18 from "../../app/images/house/18.jpeg";
import Image19 from "../../app/images/house/19.jpeg";
import { Space, Title } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const images = [
  {
    original: Image1.src,
    thumbnail: Image1.src
  },
  {
    original: Image2.src,
    thumbnail: Image2.src
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
    original: Image9.src,
    thumbnail: Image9.src
  }
  // {
  //   original: Image18.src,
  //   thumbnail: Image18.src
  // }
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
  // {
  //   original: Image16.src,
  //   thumbnail: Image16.src
  // },
  {
    original: Image17.src,
    thumbnail: Image17.src
  },
  {
    original: Image19.src,
    thumbnail: Image19.src
  }
];

const Pictures = () => {
  const { t } = useTranslation("home");

  return (
    <Container>
      <Title>{t("house")}</Title>
      <Carousel slideSize="80%" slideGap="md" loop align="center">
        {images.map((el) => (
          <Carousel.Slide>
            <Image width={1000} height={1000} alt="house" src={el.original} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Title>{t("rooms")}</Title>
      <Carousel slideSize="80%" slideGap="md" loop align="center">
        {roomImages.map((el) => (
          <Carousel.Slide>
            <Image width={1000} height={1000} alt="house" src={el.original} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Pictures;
