import React from "react";
import { IonContent,IonPage,IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import Form from "../components/Form";
import Header from "../components/Header";
import Menu  from "../components/Menu";
import NavButtons from "../components/NavButtons";
import { moon } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";



const Home: React.FC = () => {
  return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>Accueil</IonTitle>
           <IonButtons slot="end">
            <NavButtons />
           </IonButtons>
         </IonToolbar>
       </IonHeader>
       <IonContent fullscreen>
          <Form />
        </IonContent>
      </IonPage>

  );
};

export default Home;
