import { TextInput, Textarea, Button } from "@mantine/core";
import { ContactIconsList } from "./contactIcons";
import { useForm } from "@mantine/form";
import * as React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { IconSend } from "@tabler/icons-react";
import { Bounce, ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

import { colors, fonts, mediaQueries, radius, shadows } from "../../styles/theme";

const toastOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

const Wrapper = styled.div`
  display: grid;
  border-radius: ${radius.lg};
  overflow: hidden;
  box-shadow: ${shadows.lifted};
  background: ${colors.white};

  ${mediaQueries.large`
    grid-template-columns: 0.9fr 1.1fr;
  `}
`;

const Aside = styled.div`
  background: ${colors.olive};
  color: ${colors.cream};
  padding: 2.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaQueries.medium`
    padding: 3.5rem 3rem;
  `}

  h2 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: clamp(1.75rem, 4vw, 2.4rem);
    line-height: 1.15;
  }

  > p {
    color: rgba(251, 247, 241, 0.78);
    line-height: 1.7;
  }
`;

const Quote = styled.blockquote`
  margin: auto 0 0;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(251, 247, 241, 0.15);
  font-family: ${fonts.serif};
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.linen};
`;

const Form = styled.form`
  padding: 2.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  ${mediaQueries.medium`
    padding: 3.5rem 3rem;
  `}

  .row {
    display: grid;
    gap: 1.1rem;

    ${mediaQueries.small`
      grid-template-columns: 1fr 1fr;
    `}
  }
`;

const inputStyles = {
  label: { fontWeight: 600, marginBottom: 6, color: colors.text },
  input: {
    backgroundColor: colors.cream,
    borderColor: colors.border,
    minHeight: 48,
    fontSize: 16,
    "&:focus": { borderColor: colors.clay },
  },
};

export function ContactUs() {
  const { t } = useTranslation("home");
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      message: (value) => (value.trim().length < 2 ? t("errorMessage") : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? t("errorEmail") : null),
      name: (value) => (value.trim().length === 0 ? t("errorName") : null),
    },
  });

  // Dates chosen on the availability calendar arrive as ?from=..&to=..
  React.useEffect(() => {
    if (!router.isReady) return;
    const { from, to } = router.query;
    if (from && to && !form.values.message) {
      form.setFieldValue("message", `${t("reservationRequest", { from, to })}\n`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query.from, router.query.to]);

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Aside>
          <h2>{t("contactAsideTitle")}</h2>
          <p>{t("leave")}</p>
          <ContactIconsList />
          <Quote>{t("contactQuote")}</Quote>
        </Aside>

        <Form
          onSubmit={form.onSubmit(async (values) => {
            setLoading(true);
            try {
              const res = await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify({
                  from: values.email,
                  message: values.message,
                  name: values.name,
                }),
              });

              if (res.ok) {
                toast.success(t("Mail successfully sent."), toastOptions);
                form.reset();
              } else {
                toast.error(t("Mail could not be sent."), toastOptions);
              }
            } catch (e) {
              toast.error(t("Mail could not be sent."), toastOptions);
            } finally {
              setLoading(false);
            }
          })}
        >
          <div className="row">
            <TextInput
              label={t("name")}
              placeholder={t("namePlaceholder")}
              required
              autoComplete="name"
              styles={inputStyles}
              {...form.getInputProps("name")}
            />
            <TextInput
              label={t("email")}
              placeholder="your@email.com"
              required
              type="email"
              autoComplete="email"
              styles={inputStyles}
              {...form.getInputProps("email")}
            />
          </div>

          <Textarea
            required
            label={t("message")}
            placeholder={t("price")}
            minRows={6}
            autosize
            styles={inputStyles}
            {...form.getInputProps("message")}
          />

          <Button
            type="submit"
            size="lg"
            radius="xl"
            loading={loading}
            rightIcon={<IconSend size={18} />}
            styles={{ root: { alignSelf: "flex-start", minHeight: 52, paddingInline: 28 } }}
          >
            {t("send")}
          </Button>
        </Form>
      </Wrapper>
    </>
  );
}
