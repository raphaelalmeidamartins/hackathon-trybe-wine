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
    message: 'Oi {previousValue}, Como posso ajudar!?',
    end: true,
  },
  {
    id: 'wine',
    message: 'Oi {previousValue}, Como posso ajudar!?',
    end: true,
  },
  {
    id: 'other drinks',
    message: 'Oi {previousValue}, Como posso ajudar!?',
    end: true,
  },
];

export default answers;
