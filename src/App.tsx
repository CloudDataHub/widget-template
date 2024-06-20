import React from 'react';
import './App.css';
import {WidgetPropsProvider} from "./modules/common/providers/WidgetProps";
import {ApiProvider} from "./modules/common/providers/Api";
import {ExampleComponent} from "./modules/common/components/ExampleComponent";

function App() {
  return (
    <WidgetPropsProvider>
      <ApiProvider>
        <ExampleComponent/>
      </ApiProvider>
    </WidgetPropsProvider>
  );
}

export default App;
