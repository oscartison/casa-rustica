import { type StaticImageData } from 'next/image';

import corporateEvent2 from '../images/events/corporateEvent2.jpeg';
import corporateEvent3 from '../images/events/corporateEvent3.jpeg';
import corporateEvent7 from '../images/events/corporateEvent7.jpg';
import indoorEvent5 from '../images/events/indoorEvent5.png';
import outdoorEvent1 from '../images/events/outdoorEvent1.jpg';
import outdoorEvent2 from '../images/events/outdoorEvent2.jpg';
import outdoorEvent3 from '../images/events/outdoorEvent3.jpeg';
import outdoorEvent4 from '../images/events/outdoorEvent4.jpeg';
import outdoorEvent5 from '../images/events/outdoorEvent5.jpg';
import outdoorEvent6 from '../images/events/outdoorEvent6.jpg';
import stadiumblaster from '../images/products/magicfx-stadiumblaster.png';
import shotbase from '../images/products/mfx-shotbase-02-350x350.jpg';

export type RandomImage = {
  id: number;
  image: StaticImageData;
  alt: string;
};

const events: RandomImage[] = [
  {
    id: 1,
    image: corporateEvent2,
    alt: 'Corporate event',
  },
  {
    id: 2,
    image: corporateEvent3,
    alt: 'Corporate event',
  },
  {
    id: 3,
    image: corporateEvent7,
    alt: 'Corporate event',
  },
  {
    id: 4,
    image: outdoorEvent1,
    alt: 'Outdoor event',
  },
  {
    id: 5,
    image: outdoorEvent2,
    alt: 'Outdoor event',
  },
  {
    id: 6,
    image: outdoorEvent3,
    alt: 'Outdoor event',
  },
  {
    id: 7,
    image: outdoorEvent4,
    alt: 'Outdoor event',
  },
  {
    id: 8,
    image: outdoorEvent5,
    alt: 'Outdoor event',
  },
  {
    id: 9,
    image: outdoorEvent6,
    alt: 'Outdoor event',
  },
  {
    id: 10,
    image: indoorEvent5,
    alt: 'Indoor event',
  },
];

// Note: Images will work best if they are PNG and are 150x250
const products: RandomImage[] = [
  {
    id: 1,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 2,
    image: shotbase,
    alt: 'Product',
  },
  {
    id: 3,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 4,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 5,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 6,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 7,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 8,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 9,
    image: stadiumblaster,
    alt: 'Product',
  },
  {
    id: 10,
    image: stadiumblaster,
    alt: 'Product',
  },
];

export { events, products };
