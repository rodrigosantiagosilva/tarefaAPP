<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <EventoCard
        v-for="evento in favoritos"
        :key="evento.id"
        :evento="evento"
        @favoritar="Favoritar"
        @irParaDetalhe ="irParaDetalhe"
      />

      <p v-if="!favoritos.length" class="ion-text-center">
        Nenhum evento favoritado
      </p>

      <div class="flex limite">
        <ion-button @click="irEventos">Voltar</ion-button>
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

import { computed } from 'vue'
import EventoCard from '../components/EventoCard.vue'
import { useEvents } from '../composable/useEvents'

const { eventos, Favoritar, irParaDetalhe } = useEvents()

const favoritos = computed(() => {
  return eventos.value.filter(e => e.favorito === 'yes')
})

const router = useIonRouter()

const irEventos = () => {
  router.push('/eventos')
}
</script>