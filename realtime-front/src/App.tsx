import { useEffect, useState } from 'react';
import './App.css';
import { usePathStore } from './stores';
import Main from './views/Main';
import Enter from './views/Enter'
import Room from './views/Room';

// component : Root 컴포넌트 //
function App() {

  // state : Path 전역 상태 //
  const { path } = usePathStore();

  return (
    <>
      {
        path === '/' ? (<Main />) :
        path === '/enter' ? (<Enter />) :
        path === '/room' ? (<Room />) :
        (<></>)
      }
    </>
  );
}

export default App;
