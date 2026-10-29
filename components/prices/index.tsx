import * as React from "react";
import { Trans, useTranslation } from "next-i18next";
import { IconCalendarWeek, IconMessageCircle, IconSparkles, IconSun } from "@tabler/icons-react";
import styled from "styled-components";

import { colors, fonts, mediaQueries, radius } from "../../styles/theme";
import Reveal from "../_common/reveal";
import { Container, Eyebrow, Heading, PageIntro, Lead, Section } from "../_common/ui";
import { AvailabilityCalendar } from "./calendar";

const goodToKnow = [
  { key: "springAutumn", icon: IconSun },
  { key: "summer", icon: IconCalendarWeek },
  { key: "cleaning", icon: IconSparkles },
  { key: "quote", icon: IconMessageCircle }
];

const Info = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;

  ${mediaQueries.medium`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mediaQueries.large`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

const InfoItem = styled.div`
  height: 100%;
  padding: 1.5rem;
  border-radius: ${radius.md};
  background: ${colors.sand};
  line-height: 1.6;
  font-size: 0.95rem;
  color: ${colors.textSoft};

  svg {
    color: ${colors.clay};
  }

  h3 {
    margin: 0.85rem 0 0.4rem;
    font-family: ${fonts.serif};
    font-weight: 500;
    font-size: 1.2rem;
    color: ${colors.text};
  }
`;

const PricesComponent = ({ bookings }) => {
  const { t } = useTranslation("prices");

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

      <Section id="availability">
        <Container>
          <Reveal>
            <AvailabilityCalendar bookings={bookings} />
          </Reveal>

          <Reveal>
            <div style={{ marginTop: "5rem" }}>
              <Eyebrow>{t("goodToKnowEyebrow")}</Eyebrow>
              <Heading>
                <Trans t={t} i18nKey="goodToKnowTitle" components={{ em: <em /> }} />
              </Heading>
            </div>
            <Info>
              {goodToKnow.map((item) => (
                <InfoItem key={item.key}>
                  <item.icon size={26} stroke={1.5} />
                  <h3>{t(`${item.key}Title`)}</h3>
                  <p>{t(`${item.key}Description`)}</p>
                </InfoItem>
              ))}
            </Info>
          </Reveal>
        </Container>
      </Section>
    </>
  );
};

export default PricesComponent;
