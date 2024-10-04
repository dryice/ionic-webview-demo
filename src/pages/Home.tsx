import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { Browser } from '@capacitor/browser';
import './Home.css';

const Home: React.FC = () => {
  const openWebView = async () => {
    await Browser.open({ url: 'https://msso1-uat.mercer.com/adfs/ls/idpinitiatedsignon.aspx?loginToRp=https%3A%2F%2Fshashi.skordev.com%2Fprofiles%2Fsso%2Fbya%2Fmetadata' });
  };

  const openInAppBrowser = async () => {
    await Browser.open({
      url: 'https://msso1-uat.mercer.com/adfs/ls/idpinitiatedsignon.aspx?loginToRp=https%3A%2F%2Fshashi.skordev.com%2Fprofiles%2Fsso%2Fbya%2Fmetadata',
      presentationStyle: 'fullscreen',
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WebView Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonButton expand="block" onClick={openWebView}>Open WebView</IonButton>
        <IonButton expand="block" onClick={openInAppBrowser}>Open In-App Browser</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
