import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TheBasics from '@/pages/TheBasics';
import CurvedLineChart from '@/pages/CurvedLineChart';
import AxesAndScales from '@/pages/AxesAndScales';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TheBasics} />
        <Route exact path="/basic" component={TheBasics} />
        <Route exact path="/curved" component={CurvedLineChart} />
        <Route exact path="/axes" component={AxesAndScales} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
