import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchInitialData } from 'store/calendarSlice';

import Layout from 'containers/Layout';
import Reservation from 'containers/Main';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <Layout>
      <Reservation />
    </Layout>
  );
}

export default App;
