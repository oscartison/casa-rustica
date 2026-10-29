import Image, { StaticImageData } from "next/image";
import { Trans, useTranslation } from "next-i18next";
import { IconArrowRight, IconMaximize } from "@tabler/icons-react";
import styled from "styled-components";

import { galleryCategories } from "../../app/data/images";
import { colors, fonts, mediaQueries, radius } from "../../styles/theme";
import Reveal from "../_common/reveal";
import { ButtonLink, Container, Eyebrow, Lead, PageIntro, Section } from "../_common/ui";
import GalleryClient from "./gallery";

// Serve the lightbox through the Next image optimizer instead of the multi-MB originals
const optimized = (image: StaticImageData, width: number) =>
  `/_next/image?url=${encodeURIComponent(image.src)}&w=${width}&q=80`;

const lightboxSize = (image: StaticImageData) => {
  const width = Math.min(image.width, 1920);
  return `${width}-${Math.round((image.height / image.width) * width)}`;
};

const Chips = styled.nav`
  position: sticky;
  top: 4.1rem;
  z-index: 50;
  background: rgba(251, 247, 241, 0.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.border};

  ul {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.85rem 0;
    scrollbar-width: none;
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.medium`
    ul {
      justify-content: center;
    }
  `}

  a {
    display: inline-block;
    white-space: nowrap;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 1px solid ${colors.border};
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    background: ${colors.olive};
    border-color: ${colors.olive};
    color: ${colors.cream};
  }
`;

const Category = styled.section`
  scroll-margin-top: 8.5rem;

  & + & {
    margin-top: 4.5rem;
  }

  ${mediaQueries.medium`
    & + & {
      margin-top: 6rem;
    }
  `}
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.border};

  h2 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  span {
    font-size: 0.85rem;
    color: ${colors.textSoft};
    white-space: nowrap;
  }

  p {
    color: ${colors.textSoft};
    margin-top: 0.35rem;
    line-height: 1.6;
  }
`;

const Masonry = styled.div`
  columns: 1;
  column-gap: 0.85rem;

  > div {
    break-inside: avoid;
  }

  ${mediaQueries.small`
    columns: 2;
  `}

  ${mediaQueries.large`
    columns: 3;
    column-gap: 1rem;
  `}
`;

const Item = styled.a`
  position: relative;
  display: block;
  margin-bottom: 0.85rem;
  border-radius: ${radius.md};
  overflow: hidden;
  break-inside: avoid;
  cursor: zoom-in;
  background: ${colors.linen};

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  svg {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background: rgba(251, 247, 241, 0.9);
    color: ${colors.text};
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  &:hover svg,
  &:focus-visible svg {
    opacity: 1;
    transform: none;
  }

  ${mediaQueries.large`
    margin-bottom: 1rem;
  `}
`;

const Closing = styled.div`
  margin-top: 5rem;
  padding: 3rem 1.5rem;
  border-radius: ${radius.lg};
  background: ${colors.sand};
  text-align: center;

  h2 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  em {
    font-style: italic;
    color: ${colors.clay};
  }

  a {
    margin-top: 1.75rem;
  }
`;

export default function Page() {
  const { t } = useTranslation("pictures");

  return (
    <>
      <PageIntro>
        <Container $narrow>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1>
            <Trans t={t} i18nKey="title" components={{ em: <em /> }} />
          </h1>
          <Lead $center>{t("description")}</Lead>
        </Container>
      </PageIntro>

      <Chips aria-label={t("eyebrow")}>
        <Container>
          <ul>
            {galleryCategories.map((category) => (
              <li key={category.key}>
                <a href={`#${category.key}`}>{t(category.key)}</a>
              </li>
            ))}
          </ul>
        </Container>
      </Chips>

      <Section>
        <Container>
          <GalleryClient>
            {galleryCategories.map((category) => (
              <Category id={category.key} key={category.key}>
                <CategoryHeader>
                  <div>
                    <h2>{t(category.key)}</h2>
                    <p>{t(`${category.key}Description`)}</p>
                  </div>
                  <span>
                    {category.images.length} {t("photos")}
                  </span>
                </CategoryHeader>
                <Masonry>
                  {category.images.map((image, index) => (
                    <Reveal key={image.src} delay={(index % 3) * 80}>
                      <Item
                        className="gallery-item"
                        href={optimized(image, 1920)}
                        data-src={optimized(image, 1920)}
                        data-thumb={optimized(image, 256)}
                        data-lg-size={lightboxSize(image)}
                        data-sub-html={`<p>${t(category.key)}</p>`}
                        aria-label={`${t(category.key)} – ${t("photo")} ${index + 1}`}
                      >
                        <Image
                          src={image}
                          alt={`Casa Rustica De Haan – ${t(category.key)} ${index + 1}`}
                          placeholder="blur"
                          sizes="(min-width: 1100px) 380px, (min-width: 480px) 50vw, 100vw"
                        />
                        <IconMaximize stroke={1.6} />
                      </Item>
                    </Reveal>
                  ))}
                </Masonry>
              </Category>
            ))}
          </GalleryClient>

          <Reveal>
            <Closing>
              <h2>
                <Trans t={t} i18nKey="closingTitle" components={{ em: <em /> }} />
              </h2>
              <ButtonLink href="/prices">
                {t("closingButton")} <IconArrowRight size={18} />
              </ButtonLink>
            </Closing>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
