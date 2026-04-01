<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div v-if="!editando">
        <ion-item>
          <ion-label><strong>Nome:</strong>{{ name }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label><strong>Email:</strong>{{ email }}</ion-label>
        </ion-item>
        <ion-button expand="block" @click="editar">
          Mudar Perfil
        </ion-button>
      </div>
      <div v-else>
        <ion-item>
          <ion-label position="stacked">Nome</ion-label>
          <ion-input v-model="name"/>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input v-model="email" />
        </ion-item>
        <ion-button expand="block" @click="salvar">
          Salvar
        </ion-button>
        <ion-button expand="block" color="medium" @click="cancelar">
          Cancelar
        </ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue'

import { usePerfil } from '@/composable/usePerfil'

const {
  name,
  email,
  editando,
  editar,
  salvar,
  cancelar
} = usePerfil()
</script>