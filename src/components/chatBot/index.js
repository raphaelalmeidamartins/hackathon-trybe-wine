import React from 'react';
import ChatBot from 'react-simple-chatbot';
import answers from './steps';

export default function AlVinhoBot() {
  return (
    <ChatBot
      headerTitle="Alvinho"
      // recognitionEnable="true"
      // recognitionPlaceholder="estou te escutando"
      recognitionLang="pt-br"
      // speechSynthesis={{ enable: true, lang: 'pt-br' }}
      steps={answers}
    />
  );
}
