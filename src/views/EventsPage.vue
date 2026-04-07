<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Eventos</ion-title>
        </ion-toolbar>
      </ion-header>

      <EventoCard
        v-for="evento in eventos"
        :key="evento.id"
        :evento="evento"
        @favoritar="Favoritar"
        @irParaDetalhe ="irParaDetalhe"
      />
      <div class="flex limite">
        <ion-button @click="aosfavoritos">Veja Seus favoritos</ion-button>
      </div>
      
      <div class="flex limite">
        <ion-button @click="voltar">Voltar</ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter
} from '@ionic/vue'

import EventoCard from '../components/EventoCard.vue'
import { useEvents } from '../composable/useEvents'

const { eventos, Favoritar, irParaDetalhe } = useEvents()

const router = useIonRouter()

const voltar = () => {
  router.push('/home')
}
const aosfavoritos = () => {
  router.push('/eventosfavoritos')
}

</script>