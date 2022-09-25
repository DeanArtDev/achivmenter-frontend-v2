import { FC } from 'react';
import IconComponent from '@shared/assets/icons/water-svgrepo-com.svg';
import '../../global-style/global.scss';
import styles from './App.module.scss';

// TODO: FC имеен опциональный children, если он не нужен не используй FC
const App: FC = () => {
  return (
    <div className={styles.app}>
      <IconComponent fill="red" />
    </div>
  );
};

export default App;
