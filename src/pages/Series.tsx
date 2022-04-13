import React from "react";
import { IonContent,IonPage,IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import Form from "../components/Form";
import Header from "../components/Header";
import Menu  from "../components/Menu";
import NavButtons from "../components/NavButtons";
import FormSerie from "../components/FormSerie";

const Series: React.FC = () => {
  return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>Series</IonTitle>
           <IonButtons slot="end">
            <NavButtons />
           </IonButtons>
         </IonToolbar>
       </IonHeader>
       <IonContent fullscreen>
          <FormSerie />
        </IonContent>
      </IonPage>

  );
};

export default Series;