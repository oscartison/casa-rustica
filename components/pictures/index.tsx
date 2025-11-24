import dynamic from "next/dynamic";
import { Container, Text } from '@mantine/core';

const GalleryClient = dynamic(() => import("./gallery"), {
  ssr: false,
});
import {images, roomImages} from "../../app/data/images";
import { useTranslation } from 'next-i18next';

export default function Page() {
    const { t } = useTranslation("common");

  return (
    <Container>
      <Text size="xl" weight={500} align="center" mt="md" mb="md">
        {t('pictures')}
      </Text>
          <GalleryClient>

        {
          images.map((image)=> 
          (    
              <a
          data-lg-size="1600-1067"
          className="gallery-item"
          data-src={image.original}
        >
          <img
          width="100%"
            alt="Pics Casa Rustica."
            className="img-responsive"
            src={image.original}
          />
        </a>
          ))
        }
          {
          roomImages.map((image)=> 
                    (    

              <a
          data-lg-size="1600-1067"
          className="gallery-item"
          data-src={image.original}
        >
          <img
          width="100%"
            alt="Pics Rooms Casa Rustica."
            className="img-responsive"
            src={image.original}
          />
        </a>

          ))
        }
      </GalleryClient>    </Container>

  );
}