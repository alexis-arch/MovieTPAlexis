import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import Header from "../components/Header";
import NavButtons from "../components/NavButtons";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from "@ionic/react";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      var apiKey = "bdfd30226f39376db09818231367337a";
      const url = `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=${apiKey}&language=fr-FR`;
      let fetchOptions = { method: "GET" };
      fetch(url, fetchOptions)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          setListData((listData) => [...listData, res]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coup de coeur</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="user-list-page">
          <Header />
          <h2>
            Coup de coeur <span>💖</span>
          </h2>
          <div className="result">
            {listData.length > 0 ? (
              listData.map((movie) => <Card movie={movie} key={movie.id} />)
            ) : (
              <h2>Aucun coup de coeur pour le moment</h2>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserList;
