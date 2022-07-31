import React from 'react';
import { GiWineGlass } from 'react-icons/gi';
import { Popover } from '@headlessui/react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import answers from './steps';
import {
  theme, ContainerBot, PopoverButton, PopoverPanel,
} from './styles';

export default function AlVinhoBot() {
  return (
    <PopoverPanel>
      <ContainerBot>
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
        <PopoverButton
          className="popup"
        >
          {GiWineGlass}
        </PopoverButton>
      </ContainerBot>
    </PopoverPanel>
  );
}
