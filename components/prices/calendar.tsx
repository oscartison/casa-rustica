import Calendar from "@demark-pro/react-booking-calendar";
import { i18n, useTranslation } from "next-i18next";
import * as React from "react";
import { fr, nlBE, enGB } from "date-fns/locale";
import { Button, Flex, Modal, Text } from "@mantine/core";
import Link from "next/link";

const formattedDate = (date:Date) => `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`;


export const CalendarComponent = ({
  open,
  bookings,
  close
}: {
  open: boolean;
  bookings: any;
  close: any;
}) => {
  const [selectedDates, setSelectedDates] = React.useState([]);
  const handleChange = (e) => setSelectedDates(e);
  const { t } = useTranslation("prices");

  return (
    <Modal opened={open} onClose={close} centered size="lg">
      <Calendar
        selected={selectedDates}
        onChange={handleChange}
        reserved={bookings}
        dateFnsOptions={{
          weekStartsOn: 1,
          locale:
            i18n?.language === "nl" ? nlBE : i18n?.language === "en" ? enGB : fr
        }}
        range={true}
        components={{
          DayCellFooter: ({ state }) => (
            <Text size={12} color="#cccccc">
              {state?.isReserved ? t("booked") : ""}
            </Text>
          )
        }}
      />
      <Flex w="100%" h="5rem" align="center" justify="center">
        <Link
          href={{
            pathname: "/contact",
            query:
              selectedDates.length === 2
                ? { from: formattedDate(selectedDates[0] as Date), to: formattedDate(selectedDates[1] as Date) }
                : {}
          }}
        >
          <Button>{t("Contact us to book your stay")}</Button>
        </Link>
      </Flex>
    </Modal>
  );
};
