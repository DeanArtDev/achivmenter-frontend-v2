import { classes as cn } from '@shared/libs';
import style from './App.module.scss';

type AppProps = {
  className?: string;
};

const App = ({ className }: AppProps) => {
  return <div className={cn([style.app, style['app-hover'], className])}>Hello World</div>;
};

export default App;
