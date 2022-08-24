import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DreamContainer from '../components/DreamContainer'
import './Home.css';

const Dream: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stuff but different</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stuff but different</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DreamContainer />
      </IonContent>
    </IonPage>
  );
};

export default Dream;
