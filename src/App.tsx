import React from 'react';
import './App.css';
import {WidgetPropsProvider} from "./modules/common/providers/WidgetProps";
import {ApiProvider} from "./modules/common/providers/Api";
import {ExampleComponent} from "./modules/common/components/ExampleComponent";
import {WsProvider} from "./modules/common/providers/Ws";

function App() {
  return (
    <WidgetPropsProvider>
      <ApiProvider>
        <WsProvider>
          <ExampleComponent/>
        </WsProvider>
      </ApiProvider>
    </WidgetPropsProvider>
  );
}

export default App;
