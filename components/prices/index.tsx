// @ts-nocheck

import Link from 'next/link';
import {
  Text,
  Container,
  useMantineTheme,
  Title,
  Group,
  Stack,
  Box,
  Button,
  Divider,
  Flex,
  List
} from "@mantine/core";
import { useTranslation } from 'next-i18next';
import React from "react";

const PricesComponent = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation("prices");


  return (
    <Container size="lg" py="xl" >
      <Title>{t("prices")}</Title>
      <Flex sx={{ zIndex: 50 }} pt="10%">
        <Stack spacing={40}>
          <Group>
            <Flex
              align={"center"}
              direction={{ base: "column", sm: "row" }}
              color={"hsl(232, 13%, 33%)"}
              gap={{ base: "1.5rem", sm: 0 }}
            >
              <Box
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "26rem",
                  width: "17rem",
                  paddingInline: "1.5rem",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : "white",
                  borderRadius: "0.7rem 0 0 0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0.7rem"
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem 0 0 0.7rem"
                  }
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : "hsl(233, 13%, 49%)"
                    }}
                    fz={"md"}
                  >
                    {t("low season")}
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : "hsl(232, 13%, 33%)",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5
                    }}
                  >
                    <Text fz={"2rem"}>€</Text>
                    225
                  </Title>
                  <Text fz={"1rem"}>/{t("night")}</Text>

                  <Stack
                    w={"100%"}
                    align="center"
                    spacing={10}
                    sx={{
                      color:
                        theme.colorScheme === "light" && "hsl(233, 13%, 49%)"
                    }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} align="center" fw={600}>
                      {t(
                        "Weekdays in April, May, June, September and October"
                      )}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Sunday to thursday")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Min 2 nights")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                  </Stack>
                  <Link href='/contact' >

                  <Button
                    variant="gradient"
                    gradient={{
                      from: "hsl(240, 3.9106145251396653%, 64.90196078431372%)",
                      to: "hsl(240, 10.344827586206897%, 22.745098039215687%)"
                    }}
                    w="100%"
                  >
                    {t("Contact us")}
                  </Button>
                  </Link>
                </Stack>
              </Box>
              <Box
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "25rem",
                  width: "19rem",
                  paddingInline: "1.5rem",
                  background:
                    "linear-gradient(to bottom right, hsl(240, 3.9106145251396653%, 64.90196078431372%), hsl(240, 10.344827586206897%, 22.745098039215687%))",
                  color: "white",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem"
                  }
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700
                    }}
                    fz={"md"}
                  >
                    {t("high season")}
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5
                    }}
                  >
                    <Text fz={"2rem"}>€</Text>
                    260
                  </Title>
                  <Text fz={"1rem"}>/{t("night")}</Text>
                  <Stack w={"100%"} align="center" spacing={10}>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Week in July and August")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Arrive on saturday")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Min 7 nights")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "white",
                        opacity: theme.colorScheme === "dark" && 0.6
                      }}
                    />
                  </Stack>
                  <Link href='/contact' >

                  <Button
                    sx={{
                      backgroundColor: "white",
                      color:
                        "hsl(240, 10.344827586206897%, 22.745098039215687%)",

                      "&:hover": {
                        backgroundColor: "white",
                        opacity: 0.95
                      }
                    }}
                    w="100%"
                  >
                    {t("Contact us")}
                  </Button>
                  </Link>
                </Stack>
              </Box>
              <Box
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0.1)",
                  height: "26rem",
                  width: "18rem",
                  paddingInline: "1.5rem",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : "white",
                  borderRadius: "0 0.7rem 0.7rem 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0.7rem"
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0 0.7rem 0.7rem 0"
                  }
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={20}>
                  <Text
                    sx={{
                      fontWeight: 700,
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : "hsl(233, 13%, 49%)"
                    }}
                    fz={"md"}
                  >
                    {t("mid season")}
                  </Text>
                  <Title
                    order={2}
                    sx={{
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : "hsl(232, 13%, 33%)",
                      fontSize: 50,
                      display: "flex",
                      alignItems: "center",
                      gap: 5
                    }}
                  >
                    <Text fz={"2rem"}>€</Text>
                    250
                  </Title>
                  <Text fz={"1rem"}>/{t("night")}</Text>
                  <Stack
                    w={"100%"}
                    align="center"
                    spacing={10}
                    sx={{
                      color:
                        theme.colorScheme === "light" && "hsl(233, 13%, 49%)"
                    }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} align="center" fw={600}>
                      {t("Weekend in April, May, June, September and October")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Arrive on friday")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                    <Text fz={"sm"} fw={600}>
                      {t("Min 2 nights")}
                    </Text>
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: theme.colorScheme === "dark" && "gray",
                        opacity: theme.colorScheme === "dark" && 0.7
                      }}
                    />
                  </Stack>
                  <Link href='/contact' >

                  <Button
                    variant="gradient"
                    gradient={{
                      from: "hsl(240, 3.9106145251396653%, 64.90196078431372%)",
                      to: "hsl(240, 10.344827586206897%, 22.745098039215687%)"
                    }}
                    w="100%"
                  >
                    {t("Contact us")}
                  </Button>
                  </Link>
                </Stack>
              </Box>
            </Flex>
          </Group>
        </Stack>
      </Flex>
      <Divider m="3rem"/>
      <Container sx={{ "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "0.7rem"
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem 0 0 0.7rem"
                  }}} >
      <Text fw={900}>{t('Extra info')}</Text>
      <List listStyleType="initial">
         <List.Item>{t('The cleaning fee is included in the price per night.')}</List.Item>
         <List.Item>{t('A caution of 300€ will be reimbursed after the final inspection.')}</List.Item>
         <List.Item>{t('For stays of 7 days and longer a final discount can be negotiated.')}</List.Item>
      </List>
      </Container>
    </Container>
  );
};

export default PricesComponent;
