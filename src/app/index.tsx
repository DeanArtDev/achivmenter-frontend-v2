import React from 'react';
import stl from "./styles.module.scss";
import './style.scss';

type Props = {
  className?: string;
};

function App({ className }: Props) {
  const cls = [''];
  if (className) cls.push(className);
  widgets();
  shared();
  processes();
  pages();
  entities();
  features();
  return <div className={stl.header}>Hello World</div>;
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { widgets } from '@widgets';
import { shared } from '@shared';
import { processes } from '@processes';
import { pages } from '@pages';
import { entities } from '@entities';
import { features } from '@features';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
