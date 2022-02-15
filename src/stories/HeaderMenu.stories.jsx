import React from 'react';

import { Header, HeaderButtonMenu, HeaderLink, ModalMenuLink } from '../Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => (
  <Header>
    <HeaderButtonMenu buttonChild="Menu" topLock={100}>
      <ModalMenuLink href="/">Link 1</ModalMenuLink>
      <ModalMenuLink href="/">Link 2</ModalMenuLink>
      <ModalMenuLink href="/">Link 3</ModalMenuLink>
    </HeaderButtonMenu>
    <HeaderLink href="/">Link 4</HeaderLink>
    <HeaderLink href="/">Link 5</HeaderLink>
  </Header>
);

export const DemoHeader = Template.bind({});

DemoHeader.args = {};
