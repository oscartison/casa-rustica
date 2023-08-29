import { type StaticImageData } from 'next/image';

import aquaInMotion from '../logos/partners/logoAquaInMotion.png';
import clubCannon from '../logos/partners/logoClubCannon.jpg';
import exploIGNSystems from '../logos/partners/logoExploIGNsystems.png';
import galaxis from '../logos/partners/logoGalaxis.png';
import hanFXSol from '../logos/partners/logoHanFXSol.png';
import hazeBase from '../logos/partners/logoHazeBase.png';
import mbn from '../logos/partners/logoMBN.png';
import showven from '../logos/partners/logoShowven.jpg';
import syncronorm from '../logos/partners/logoSycronorm.jpg';
import magicfx from '../logos/partners/magicfx.webp';

export type Partner = {
  id: number;
  name: string;
  image: StaticImageData;
};

const partners: Partner[] = [
  {
    id: 1,
    name: 'Aqua In Motion',
    image: aquaInMotion,
  },
  {
    id: 2,
    name: 'Club Cannon',
    image: clubCannon,
  },
  {
    id: 3,
    name: 'Explo IGN Systems',
    image: exploIGNSystems,
  },
  {
    id: 4,
    name: 'Galaxis',
    image: galaxis,
  },
  {
    id: 5,
    name: 'Han FX Sol',
    image: hanFXSol,
  },
  {
    id: 6,
    name: 'HazeBase',
    image: hazeBase,
  },
  {
    id: 7,
    name: 'MBN Event Products',
    image: mbn,
  },
  {
    id: 8,
    name: 'Showven',
    image: showven,
  },
  {
    id: 9,
    name: 'Syncronorm',
    image: syncronorm,
  },
  {
    id: 10,
    name: 'Magic FX',
    image: magicfx,
  },
];

export default partners;
