import Calendar, { Selected } from "@demark-pro/react-booking-calendar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";
import { fr, nlBE, enGB } from "date-fns/locale";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import styled from "styled-components";

import { colors, fonts, mediaQueries, radius, shadows } from "../../styles/theme";
import { ButtonLink } from "../_common/ui";

const formattedDate = (date: Date) =>
  `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`;

const Layout = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;

  ${mediaQueries.large`
    grid-template-columns: 1fr 1.25fr;
    gap: 4rem;
  `}
`;

const Hint = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${colors.textSoft};
`;

const Summary = styled.div`
  background: ${colors.white};
  border-radius: ${radius.md};
  padding: 1.5rem;
  margin-top: 2rem;
  box-shadow: ${shadows.soft};

  h3 {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${colors.textSoft};
  }
`;

const Dates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0 1.5rem;

  div {
    padding: 0.85rem 1rem;
    border-radius: ${radius.sm};
    background: ${colors.cream};
    border: 1px solid ${colors.border};
  }

  span {
    display: block;
    font-size: 0.75rem;
    color: ${colors.textSoft};
  }

  strong {
    display: block;
    margin-top: 0.2rem;
    font-family: ${fonts.serif};
    font-weight: 500;
    font-size: 1.15rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  a {
    flex: 1 1 auto;
  }
`;

const Clear = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 0;
  background: none;
  padding: 0.5rem 0;
  font: inherit;
  font-size: 0.9rem;
  color: ${colors.textSoft};
  cursor: pointer;

  &:hover {
    color: ${colors.text};
  }
`;

const Legend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: ${colors.textSoft};

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 4px;
  }
`;

// Restyles the calendar library (prefix "cr") to the site palette.
// Several of its colors are inline styles, hence the !important.
const CalendarCard = styled.div`
  background: ${colors.white};
  border-radius: ${radius.lg};
  padding: 1rem 0.75rem 0.5rem;
  box-shadow: ${shadows.lifted};

  ${mediaQueries.medium`
    padding: 1.5rem 1.5rem 1rem;
  `}

  .cr__calendar-container,
  .cr__week-container {
    background: transparent !important;
    font-family: ${fonts.sans} !important;
  }

  .cr__month-content span {
    font-family: ${fonts.serif};
    font-size: 1.2rem;
    color: ${colors.text} !important;
  }

  .cr__month-arrowBack,
  .cr__month-arrowNext {
    width: 36px !important;
    height: 36px !important;
    padding: 4px;
    border-radius: 50%;

    &:hover {
      background: ${colors.sand} !important;
    }

    path {
      fill: ${colors.clay} !important;
    }
  }

  .cr__weekCell {
    color: ${colors.textSoft} !important;
    letter-spacing: 0.08em;
  }

  .cr__dayCell {
    border-top-color: ${colors.sand} !important;
  }

  .cr__dayCell-selectedStart,
  .cr__dayCell-selectedEnd {
    background: ${colors.clay} !important;
  }

  .cr__dayCell-selected {
    background: #dca27e !important;
  }
`;

type DayContentProps = {
  date: Date;
  children?: React.ReactNode;
  state: {
    isToday?: boolean;
    isSelected?: boolean;
    isSelectedStart?: boolean;
    isSelectedEnd?: boolean;
    isReserved?: boolean;
    isPast?: boolean;
  };
};

const DayCellContent = ({ date, children, state }: DayContentProps) => {
  const selected = state.isSelected || state.isSelectedStart || state.isSelectedEnd;
  const unavailable = state.isReserved || state.isPast;
  return (
    <div
      className="cr__dayCell-content"
      style={{
        zIndex: 3,
        textDecoration: state.isReserved ? "line-through" : "none",
        fontWeight: state.isToday ? 700 : 400,
        color: selected ? colors.white : unavailable ? "#C9BFB3" : state.isToday ? colors.clay : colors.text
      }}
    >
      {date.getDate()}
      {children}
    </div>
  );
};

export const AvailabilityCalendar = ({ bookings }: { bookings: { startDate: Date; endDate: Date }[] }) => {
  const [selectedDates, setSelectedDates] = React.useState<Selected[]>([]);
  const { t } = useTranslation("prices");
  const { locale } = useRouter();

  const dateLocale = locale === "nl" ? nlBE : locale === "fr" ? fr : enGB;
  const display = (date?: Date) =>
    date ? date.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" }) : "—";

  const [arrival, departure] = selectedDates.map((date) => (date ? new Date(date) : undefined));
  const complete = selectedDates.length === 2 && arrival && departure;

  return (
    <Layout>
      <div>
        <Hint>{t("calendarHint")}</Hint>
        <Summary>
          <h3>{t("Your stay")}</h3>
          <Dates>
            <div>
              <span>{t("Arrival")}</span>
              <strong>{display(arrival)}</strong>
            </div>
            <div>
              <span>{t("Departure")}</span>
              <strong>{display(departure)}</strong>
            </div>
          </Dates>
          <Actions>
            <ButtonLink
              href={{
                pathname: "/contact",
                query: complete ? { from: formattedDate(arrival), to: formattedDate(departure) } : {}
              }}
            >
              {complete ? t("Request these dates") : t("Contact us to book your stay")}
              <IconArrowRight size={18} />
            </ButtonLink>
            {selectedDates.length > 0 && (
              <Clear type="button" onClick={() => setSelectedDates([])}>
                <IconX size={16} /> {t("Clear dates")}
              </Clear>
            )}
          </Actions>
        </Summary>
        <Legend>
          <li>
            <i style={{ background: colors.clay }} /> {t("Your selection")}
          </li>
          <li>
            <s style={{ color: "#C9BFB3" }}>12</s> {t("booked")}
          </li>
        </Legend>
      </div>

      <CalendarCard>
        <Calendar
          classNamePrefix="cr"
          selected={selectedDates}
          onChange={setSelectedDates}
          reserved={bookings}
          dateFnsOptions={{ weekStartsOn: 1, locale: dateLocale }}
          range={true}
          components={{ DayCellContent }}
        />
      </CalendarCard>
    </Layout>
  );
};
