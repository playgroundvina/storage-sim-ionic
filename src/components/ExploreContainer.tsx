import { IonButton } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div style={{ marginTop: 200, flexDirection: 'column', display: 'flex', padding: 20 }}>
      <strong>Click Button to set value to localStorage</strong>
      <IonButton onClick={() => {
        localStorage['environtment'] = 'ionic';
      }}>Set value</IonButton>
      <p>Value in storage is: <span style={{ fontSize: 16, fontWeight: 600 }}>{localStorage['environtment']}</span></p>
    </div >
  );

};

export default ExploreContainer;
