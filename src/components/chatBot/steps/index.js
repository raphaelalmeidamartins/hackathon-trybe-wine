import { Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ChatBotContainer from '../styles/components';

const answers = [
  {
    id: 'greeting-1',
    message: 'Olá! me chamo Alvinho e serei seu Sommelier virtual!',
    trigger: 'greeting-2',
  },
  {
    id: 'greeting-2',
    message: 'Como é o seu nome?!',
    trigger: 'greeting-3',
  },
  {
    id: 'greeting-3',
    user: true,
    trigger: 'greeting-4',
  },
  {
    id: 'greeting-4',
    message: 'Oi {previousValue}, Como vai você!? Prazer em te conhecer!',
    trigger: 'greeting-5',
  },
  {
    id: 'greeting-5',
    message: 'Como posso ajudar!? Você gostaria de saber mais sobre vinhos ou uma de nossas assinaturas?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Assinaturas', trigger: 'membership' },
      { value: 2, label: 'Vinhos', trigger: 'wine' },
      { value: 3, label: 'Nacionalidade', trigger: 'nationality' },
    ],
  },
  {
    id: 'membership',
    component: (
      <ChatBotContainer>
        <h1>Assinaturas</h1>
        <Link to="/checkout">Assinaturas</Link>
      </ChatBotContainer>
    ),
    end: true,
  },
  {
    id: 'nationality',
    message: 'Você prefere encontrar vinhos nacionais ou importados?',
    trigger: 'wine-by-nationality',
  },
  {
    id: 'wine-by-nationality',
    options: [
      { value: 1, label: 'Nacionais', trigger: 'domestic' },
      { value: 2, label: 'Importados', trigger: 'imported' },
    ],
  },
  {
    id: 'domestic',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atPAIS_BRASIL">Encontrar vinhos Nacionais</Button>),
  },
  {
    id: 'imported',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atPAIS_ARGENTINA,atPAIS_CHILE,atPAIS_PORTUGAL">Encontrar vinhos Importados</Button>),
  },
  {
    id: 'wine',
    message: 'Você gostaria de encontrar vinhos por seu:',
    trigger: 'wine-options',
  },
  {
    id: 'wine-options',
    options: [
      { value: 1, label: 'tipo', trigger: 'wine-by-type' },
      { value: 2, label: 'acompanhamento', trigger: 'wine-by-side' },
    ],
  },
  {
    id: 'wine-by-type',
    message: 'Nós temos disponivel estes tipos de vinho:',
    trigger: 'wine-type-options',
  },
  {
    id: 'wine-type-options',
    options: [
      { value: 1, label: 'Tinto', trigger: 'red-wine' },
      { value: 2, label: 'Branco', trigger: 'white-wine' },
      { value: 3, label: 'Espumante', trigger: 'sparkling-wine' },
      { value: 4, label: 'Rosé', trigger: 'rose-wine' },
      { value: 5, label: 'Licoroso', trigger: 'liquer-wine' },
    ],
  },
  {
    id: 'red-wine',
    message: 'Os vinhos tintos são produzidos por meio da fermentação do suco extraído de uvas tintas.',
    trigger: 'red-wine2',
  },
  {
    id: 'red-wine2',
    message: 'Por causa da grande variedade de uvas existentes para a produção de vinho tinto, a bebida pode ter estilos e gostos muito diferentes, de acordo com as características de sua produção.',
    trigger: 'red-wine3',
  },
  {
    id: 'red-wine3',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atTIPO_TINTO">Encontrar vinhos Tintos</Button>),
  },
  {
    id: 'white-wine',
    message: 'O vinho branco pode ser produzido a partir de uvas brancas e tintas, com método de produção distinta ao do vinho tinto.',
    trigger: 'white-wine2',
  },
  {
    id: 'white-wine',
    message: 'São indicados para serem servidos gelados e acompanham muito bem comidas leves como queijos, peixes e frutos do mar.',
    trigger: 'white-wine3',
  },
  {
    id: 'white-wine3',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atTIPO_BRANCO">Encontrar vinhos Brancos</Button>),
  },
  {
    id: 'sparkling-wine',
    message: 'Ele é um tipo de vinho produzido com gás carbônico dissolvido. Também é conhecido como um vinho com “perlage”, que significa borbulhas.',
    trigger: 'sparkling-wine2',
  },
  {
    id: 'sparkling-wine2',
    message: 'Apesar de muitas pessoas associarem o espumante ao Champagne, é bom dizer que as duas bebidas são diferentes.',
    trigger: 'sparkling-wine3',
  },
  {
    id: 'sparkling-wine3',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atTIPO_ESPUMANTE">Encontrar vinhos espumantes</Button>),
  },
  {
    id: 'liquer-wine',
    message: 'O vinho licoroso é caracterizado pela quantidade elevada de teor alcoólico - estima-se que tenha entre 19% e 22% - além de ser elaborado com alta quantidade de açúcar. ',
    trigger: 'liquer-wine2',
  },
  {
    id: 'liquer-wine2',
    message: 'São vinhos comumente doces, os famosos vinhos de sobremesa. Diferente do Vinho do Porto, tem um teor alcoólico mais baixo.',
    trigger: 'liquer-wine3',
  },
  {
    id: 'liquer-wine3',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atTIPO_LICOROSO">Encontrar vinhos licorosos</Button>),
  },
  {
    id: 'rose-wine',
    message: 'Cada vez mais apreciado pelo sabor, sofisticação e custo-benefício, o vinho rosé é considerado ideal para o verão, e deve ser servido a uma temperatura em torno dos 8 graus. ',
    trigger: 'rose-wine2',
  },
  {
    id: 'rose-wine2',
    message: 'A bebida, bastante prestigiada em várias regiões, harmoniza muito bem com o clima tropical brasileiro e é uma opção que ganha cada vez mais adeptos.',
    trigger: 'rose-wine3',
  },
  {
    id: 'rose-wine3',
    component: (<Button component="a" href="https://www.wine.com.br/browse.ep?cID=100851&exibirEsgotados=false&listagem=horizontal&sorter=featuredProducts-desc&filters=cVINHOS%20atTIPO_ROSE">Encontrar vinhos licorosos</Button>),
  },
    end: true,
  },
  {
    id: 'other drinks',
    component: (
      <ChatBotContainer>
        <h1>Assinaturas</h1>
        <Link to="/checkout">Assinaturas</Link>
      </ChatBotContainer>
    ),
    end: true,
  },
];

export default answers;
