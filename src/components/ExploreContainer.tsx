import './ExploreContainer.css';
import { IonContent, IonTextarea, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonDatetime } from '@ionic/react';
import React, {useState} from 'react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [title, setTitle] = useState<string>();
  const [date, setDate] = useState<number>();
  const [text, setText] = useState<string>()
  function handleChange(stuff:any) {
    setDate(stuff)
    console.log(date);
  }
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
          <IonItemDivider>Select Reminder Date and Time</IonItemDivider>
          <IonItem>
            <IonDatetime onIonChange={(e) => handleChange(e.target.value)}></IonDatetime>
          </IonItem>
          <IonItem>
            <IonButton>Submit</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
      </>
  );
};

export default ExploreContainer;
