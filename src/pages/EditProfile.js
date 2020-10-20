import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

const EditProfile = () => {
  return (
    <IonPage>
      <NavHeader title="Edit Profile" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="name" type="text"></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text"></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Current Password</IonLabel>
          <IonInput name="currentPassword" type="password"></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">New Password</IonLabel>
          <IonInput name="newPassword" type="text"></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Update
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
export default EditProfile;
