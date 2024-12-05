import React from 'react';
import './App.css';
import {WidgetPropsProvider} from "./modules/common/providers/WidgetProps";
import {ExampleComponent} from "./modules/common/components/ExampleComponent";
import {EventsProvider} from "./modules/common/providers/EventHandler";

function App() {
  return (
    <WidgetPropsProvider>
        <EventsProvider>
          <ExampleComponent/>
        </EventsProvider>
    </WidgetPropsProvider>
  );
}

export default App;
