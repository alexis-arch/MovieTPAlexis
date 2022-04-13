import {IonButton,IonMenuButton,IonIcon} from "@ionic/react";
import React, {useEffect} from "react";

 const NavButtons = () =>{
    const[mQuery,setMQuery] = React.useState<any>({
      matches:window.innerWidth > 768 ? true : false,  
    })
    useEffect(() => {
    window.matchMedia("(min-width : 768px)").addListener(setMQuery);
    console.log(mQuery.matches);

},[]);

return(
    <div>
        {mQuery && !mQuery.matches ? (
            <IonMenuButton/>
        ):(
            <>

            <IonButton routerLink={"/"}>Accueil</IonButton>
            <IonButton routerLink={"/series"}>Series TV</IonButton>
            <IonButton routerLink={"/coup-de-coeur"}>Coup de coeur</IonButton>

            </>
        )}
    </div>
)
}

export default NavButtons;