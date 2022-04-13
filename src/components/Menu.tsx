
import React from "react";
import { ReactComponent as TvSvg } from '../assets/icon/tv-outline.svg';
import {arrowBackCircleOutline} from "ionicons/icons";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import SvgListenTV from "../assets/icon/SvgListen";
import HeartListen from "../assets/icon/HeartListen";
import BrowserListen from "../assets/icon/BrowserListen";



const Menu: React.FC = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/"} routerDirection="none">
              <IonLabel>
                <SvgListenTV></SvgListenTV>
              Accueil</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem
              button
              routerLink={"/coup-de-coeur"}
              routerDirection="none"
            >
              <IonLabel><HeartListen></HeartListen>Coup de coeur</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem
              button
              routerLink={"/series"}
              routerDirection="none"
            >
              <IonLabel><BrowserListen></BrowserListen>Series TV</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
