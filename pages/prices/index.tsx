import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Seo from "../../components/_common/seo";
import { useTranslation } from "next-i18next";
import * as React from "react";
import PricesComponent from "../../components/prices";

const Prices = ({ items }) => {
  const { t } = useTranslation("prices");

  // All-day events carry `date`, timed events carry `dateTime`
  const bookings = items.map((item) => ({
    startDate: new Date(item.start.date ?? item.start.dateTime),
    endDate: new Date(item.end.date ?? item.end.dateTime)
  }));

  return (
    <>
      <Seo title={t("seoTitle")} description={t("seoDescription")} />
      <PricesComponent bookings={bookings} />
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
    items = (r.items ?? []).filter((item) => item.start && item.end);
  } catch (e) {
    items = [];
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "prices"])),
      items
    },
    // Re-fetch the booking calendar at most once an hour
    revalidate: 3600
  };
}
