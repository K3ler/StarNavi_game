import React from 'react';
import cl from './index.module.sass';

import { Map } from '../../components/Map/index'
import { Controls } from '../../components/Controls';
import { LeaderList } from '../../components/LeaderList';

const App: React.FC = () => {

  return (
    <div className={cl.app}>
      <Controls />

      <div className={cl.container}>
        <Map />
        <LeaderList />
      </div>

    </div>
  );
}

export default App;
