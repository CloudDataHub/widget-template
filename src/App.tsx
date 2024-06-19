import React from 'react';
import './App.css';
import {WidgetPropsProvider} from "./modules/common/providers/WidgetProps";
import {ApiProvider} from "./modules/common/providers/Api";

function App() {
  return (
    <WidgetPropsProvider>
      <ApiProvider>
      Test
      </ApiProvider>
    </WidgetPropsProvider>
  );
}

export default App;
