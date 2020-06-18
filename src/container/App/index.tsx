import React, { useEffect } from 'react';
import cl from './index.module.sass';

// Components
import { Map } from '../../components/Map/index'
import { Controls } from '../../components/Controls';
import { LeaderList } from '../../components/LeaderList';
import { Message } from '../../components/Message';

// Actions
import { setGameSettigns } from '../../redux/actions/indexActions';
import { getLeaders } from '../../redux/actions/leaderActions';

// Libs
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';


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

      {/* Popup message notifer  */}
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
