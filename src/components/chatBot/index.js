import React from 'react';
import { Popover } from '@headlessui/react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import answers from './steps';
import { theme, ContainerBot, PopoverButton } from './styles';

export default function AlVinhoBot() {
  return (
    <Popover className="relative">
      <ContainerBot>
        <PopoverButton
          className="popup"
        >
          O
        </PopoverButton>
        <Popover.Panel>
          <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="Alvinho"
              // recognitionEnable="true"
              // recognitionPlaceholder="estou te escutando"
              recognitionLang="pt-br"
              // speechSynthesis={{ enable: true, lang: 'pt-br' }}
              steps={answers}
            />
          </ThemeProvider>
        </Popover.Panel>
      </ContainerBot>
    </Popover>
  );
}
