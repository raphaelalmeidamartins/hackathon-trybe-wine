// import * as React from 'react';
import { Popover } from '@headlessui/react';
import styled from 'styled-components';

export const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#b6116e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#b6116e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export const ContainerBot = styled.aside`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    .md\:bottom {
      bottom: 2.5rem;
    }
  }
  @media (min-width: 768px) {
  .md\:right-10 {
    right: 2.5rem/* 40px */;
  }
}
`;

export const PopoverButton = styled(Popover.Button)`
  background: #b6116e;
  border: none;
  border-radius: 100%;
  padding-left: 0.75rem;
  padding-right: 1.75rem;
  height: 3rem;
  display: flex;
  align-items: center;
`;
