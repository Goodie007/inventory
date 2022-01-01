import React, { FC, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar} from '@ionic/react';
import './Tab1.css';

const Stocks: React.FC = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=200')
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stocks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Search</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}
           showCancelButton='never'></IonSearchbar>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Stocks;
