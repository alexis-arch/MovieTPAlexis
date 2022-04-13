import { Redirect, Route } from 'react-router-dom';
import React from "react";
//import Films from "./components/Films";

import Home from './pages/Home';
import UserList from './pages/UserList';
import Menu from './components/Menu';
import Series from './pages/Series';

import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { IonContent,IonPage } from '@ionic/react';
import Header from "../src/components/Header";

setupIonicReact();

const App: React.FC=()=>(
  <IonApp>
        <IonReactRouter>
          <Menu/>
          <IonRouterOutlet id="main">
              <Route path="/" component={Home} exact={true} />
              <Route path="/coup-de-coeur" component={UserList} exact={true} />
              <Route path="/series" component={Series} exact={true} />

            </IonRouterOutlet>
      </IonReactRouter>
  </IonApp>
  );


export default App;
//export { ThemeContext } from 'styled-components';

