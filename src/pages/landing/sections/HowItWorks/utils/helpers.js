import React from 'react';
import icon1 from './images/icon-01.webp';
import icon2 from './images/icon-02.webp';
import icon3 from './images/icon-03.webp';
import icon4 from './images/icon-04.webp';
import { HowItWorksLine } from '../../../../../components/HowItWorksCard/style';

const steps = [
  {
    key: 'one',
    title: 'Você escolhe!',
    description: 'São 6 Clubes diferentes, e você escolhe a WineBox que mais combina com você.',
    image: icon1,
    line: <HowItWorksLine half right />,
  },
  {
    key: 'two',
    title: 'Curadoria',
    description:
      'Nossos Winehunters recebem amostras de exemplares e fazem diversas análises para seleção dos melhores vinhos.',
    image: icon2,
    line: <HowItWorksLine />,
  },
  {
    key: 'three',
    title: 'Comodidade',
    description: 'Todo mês, você recebe sua WineBox no local que escolher.',
    image: icon3,
    line: <HowItWorksLine />,
  },
  {
    key: 'four',
    title: 'Aproveite!',
    description: 'Viva experiencias incríveis e brinde á vida com os melhores vinhos.',
    image: icon4,
    line: <HowItWorksLine half left />,
  },
];

export default steps;
