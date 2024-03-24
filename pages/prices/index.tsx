import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

import Seo from "../../components/_common/seo";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import * as React from "react";
import PricesComponent from "../../components/prices";

const TextContainer = styled.div<{ $isMobile: boolean }>`
  margin-top: ${(props) => (props.$isMobile ? "3rem" : "4rem")};
  height: fit-content;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
`;

const Prices = ({ items }) => {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const { t } = useTranslation("common");

  const bookings = items.map((item) => ({
    startDate: new Date(item.start.date),
    endDate: new Date(item.end.date)
  }));

  return (
    <>
      <Seo title={`${t("prices")} - Casa Rustica`} />
      <TextContainer $isMobile={isMobile}>
        <PricesComponent bookings={bookings} />
      </TextContainer>
    </>
  );
};

export default Prices;

export async function getStaticProps({ locale }) {
  let items;
  try {
    const a = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/1d437be726f23042b2ba8c2e886cf7cecab8530496a0e9bed974b8a40833b758@group.calendar.google.com/events?key=${process.env.GOOGLE_API_KEY}`
    );
    const r = await a.json();
    items = r.items;
    console.log({items});
  } catch (e) {
    items = [];
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common", "prices"])),
      items
    }
  };
}
