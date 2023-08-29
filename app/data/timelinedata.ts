import { type StaticImageData } from 'next/image';

import placeholder from '../images/events/outdoorEvent2.jpg';

export type TimelineItem = {
  id: number;
  year: string;
  description: string;
  image: StaticImageData | undefined;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2006',
    description: "Emerson Wellens lays today's foundations of AVM-SFX.",
    image: placeholder,
  },
  {
    id: 2,
    year: '2009',
    description: "Rehearsals for Michael Jackson's “This is it” show.",
    image: undefined,
  },
  {
    id: 3,
    year: '2010',
    description:
      'Transformation to AVM Belgium BVBA & Re-location to a 300 m2 warehouse.',
    image: undefined,
  },
  {
    id: 4,
    year: '2011',
    description: 'First employee gets hired.',
    image: placeholder,
  },
  {
    id: 5,
    year: '2013',
    description: 'We introduce the first color smoke comets to Europe.',
    image: placeholder,
  },
  {
    id: 6,
    year: '2016',
    description: 'Xavier Kosolosky joins with a participation in the company.',
    image: undefined,
  },
  {
    id: 7,
    year: '2017',
    description: 'We obtained a pyrotechnic storage.',
    image: undefined,
  },
  {
    id: 8,
    year: '2018',
    description: 'Expansion with a second 200 m2 warehouse.',
    image: undefined,
  },
  {
    id: 9,
    year: '2019',
    description:
      'Expansion of our offices, incl. a programmation & visualization studio.',
    image: undefined,
  },
  {
    id: 10,
    year: '2020',
    description: 'The construction of a brand new warehouse starts.',
    image: undefined,
  },
  {
    id: 11,
    year: '2021',
    description: 'We moved to our brand new premises.',
    image: placeholder,
  },
];

export default timelineData;
