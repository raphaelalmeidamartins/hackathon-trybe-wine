import * as React from 'react';
import { Link } from 'react-router-dom';
import ChatBotContainer from '../styles/components';

const answers = [
  {
    id: 'greeting-1',
    message: 'Olá! me chamo Alvinho e serei seu Sommelier virtual!',
    trigger: 'greeting-5',
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
    message: 'Como posso ajudar!?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Assinaturas', trigger: 'membership' },
      { value: 2, label: 'Vinhos', trigger: 'wine' },
      { value: 3, label: 'Outras bebidas', trigger: 'other drinks' },
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
    id: 'wine',
    component: (
      <ChatBotContainer>
        <h1>Assinaturas</h1>
        <Link to="/checkout">Assinaturas</Link>
      </ChatBotContainer>
    ),
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
