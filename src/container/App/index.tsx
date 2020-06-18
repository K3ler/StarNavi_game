import React, { useEffect } from 'react';
import cl from './index.module.sass';

import { Map } from '../../components/Map/index'
import { Controls } from '../../components/Controls';
import { LeaderList } from '../../components/LeaderList';
import { setGameSettigns } from '../../redux/actions/indexActions';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLeaders } from '../../redux/actions/leaderActions';
import { Message } from '../../components/Message';

const App: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    // Setup Game Settings
    dispatch(setGameSettigns())

    // Get Leaders
    dispatch(getLeaders())
  }, [dispatch])


  return (
    <div className={cl.app}>
      <ToastContainer position="top-right"
                      autoClose={5000}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss={false}
                      draggable
                      pauseOnHover />
      <Controls />

      <Message />

      <div className={cl.container}>
        <Map />
        <LeaderList />
      </div>

    </div>
  );
}

export default App;
