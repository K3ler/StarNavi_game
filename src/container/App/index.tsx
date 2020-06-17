import React from 'react';
import cl from './index.module.sass';

import Map from '../../components/Map'

const App: React.FC = () => {
  
  return (
    <div className={cl.app}>
      <Map />
    </div>
  );
}

export default App;
