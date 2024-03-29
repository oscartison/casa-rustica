import { useTranslation } from "next-i18next";
import * as React from "react";
import styled from "styled-components";
import { Container, Title } from "@mantine/core";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images, roomImages } from "../../app/data/images";

const StContainer = styled(Container)`
  padding: 3rem;
  max-width: 100dvw;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  .slider {
    max-width: 100dvw;
    width: 1000px;
    margin: 0;
  }
`;

const Pictures = () => {
  const { t } = useTranslation("home");
  const myRef = React.useRef(null);
  const executeScroll = () => {
    if (myRef && myRef.current) {
      window.scrollTo({
        top: (myRef.current as any).offsetTop - 800,
        behavior: "smooth"
      });
    }
  };

  const change = (index: number) => {
    if (index === 0) {
      executeScroll();
    }
  };

  return (
    <StContainer>
      <Title>{t("house")}</Title>
      <ImageGallery
        additionalClass="slider"
        lazyload={true}
        onSlide={change}
        items={images}
      />
      <Title>{t("rooms")}</Title>
      <ImageGallery
        additionalClass="slider"
        lazyload={true}
        items={roomImages}
      />
      <div ref={myRef} />
    </StContainer>
  );
};

export default Pictures;
