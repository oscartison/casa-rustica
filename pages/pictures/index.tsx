import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Pictures from '../../components/pictures';

import Seo from '../../components/_common/seo';

const PicturesPage = () => {
  const { t } = useTranslation('pictures');

  return (
    <>
      <Seo title={t('seoTitle')} description={t('seoDescription')} />
      <Pictures />
    </>
  );
};

export default PicturesPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'pictures','common'
      ])),
    },
  }
}
