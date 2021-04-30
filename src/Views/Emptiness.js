import tabSwitch from '../Components/tabSwitch';
import React, { useState, Suspense } from 'react';
import { useStore } from 'react-context-hook';

function Emptiness() {
  const [logged, setLogState, deleteLog] = useStore('logged');
  const TabSwitch = React.lazy(() => import('../Components/tabSwitch'));

  if (logged) {
    return (
      <div className="content">
        <h1>
          Nothing
        </h1>
        <div>
          <h2>...</h2>
        </div>
        <Suspense fallback={<div> loading... </div>}>
          <TabSwitch slnk={3}></TabSwitch>
        </Suspense>
      </div>
    )
  }
  return (
    <div className="content  features">
      <div className="not-logged">
        💢💢💢😠 Forgot to login again!! 😠💢💢💢
      </div>
      <Suspense fallback={<div> loading... </div>}>
        <TabSwitch slnk={3}></TabSwitch>
      </Suspense>
    </div>
  );
}

export default Emptiness;