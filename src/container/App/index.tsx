import React from 'react';
import cl from './index.module.sass';

import Map from '../../components/Map'
import { Controls } from '../../components/Controls';

const App: React.FC = () => {
  
  return (
    <div className={cl.app}>
      <Controls />
      <Map />
    </div>
  );
}

export default App;
