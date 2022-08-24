import './ExploreContainer.css';
import { IonContent, IonTextarea, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonDatetime } from '@ionic/react';
import React, {useState} from 'react';

interface ContainerProps { }

const DreamContainer: React.FC<ContainerProps> = () => {
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>()
  return (
    <>
    <IonContent>
        <IonList>
          <IonItemDivider>Enter a title for your idea</IonItemDivider>
          <IonItem>
            <IonInput value={title} placeholder="Enter Input" onIonChange={e => setTitle(e.detail.value!)}></IonInput>
          </IonItem>
            <IonItemDivider>Enter a description of your idea</IonItemDivider>
          <IonItem>
            <IonTextarea value={text} placeholder="Enter text" onIonChange={e => setText(e.detail.value!)}>
            </IonTextarea>
          </IonItem>
          <IonItem>
            <IonButton>Submit</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
      </>
  );
};

export default DreamContainer;
