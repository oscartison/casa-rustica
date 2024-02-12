import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
} from '@mantine/core';
import { ContactIconsList } from './contactIcons';
import classes from './ContactUs.module.css';
import { useForm } from '@mantine/form';
import * as React from 'react';
import { useTranslation } from "next-i18next";
import { useMediaQuery } from '@mantine/hooks';



export function ContactUs() {
    const { t } = useTranslation('home')

    const [loading, setLoading] = React.useState(false)

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: {
            message: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            name: (value) => value.trim().length === 0,
        },
    });
    const matches = useMediaQuery('(min-width: 56.25em)');

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={matches ? 2 : 1} spacing={50}>
                <div>
                    <Title className={classes.title}>{t('contact')}</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        {t('leave')}
                    </Text>

                    <ContactIconsList />
                </div>
                <div className={classes.form}>
                    <form onSubmit={form.onSubmit(async (values) => {
                        setLoading(true);
                        try {
                            await fetch('/api/mail', { method: 'POST', body: JSON.stringify({ from: values.email, message: values.message, name: values.name }) })
                            form.reset();
                        } finally {
                            setLoading(false);
                        }
                    })}>

                        <TextInput
                            label={t('email')}
                            placeholder="your@email.com"
                            required
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                            {...form.getInputProps('email')}

                        />
                        <TextInput
                            label={t('name')}
                            placeholder="John Doe"
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                            {...form.getInputProps('name')}

                        />
                        <Textarea
                            required
                            label={t('message')}
                            placeholder={t('price')}
                            minRows={4}
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                            {...form.getInputProps('message')}

                        />

                        <Group mt="md">
                            <Button loading={loading} className={classes.control} type='submit'>{t('send')}</Button>
                        </Group>
                    </form>
                </div>
            </SimpleGrid>
        </div>
    );
}