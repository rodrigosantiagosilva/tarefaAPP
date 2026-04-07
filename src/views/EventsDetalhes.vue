<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card v-if="evento">
        <ion-card-header>
          <ion-card-title>{{ evento.titulo }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Data:</strong> {{ evento.data }}</p>
          <p><strong>Descrição:</strong></p>
          <p>{{ evento.descricao }}</p>
        </ion-card-content>
      </ion-card>

      <ion-button @click="voltar">
              Voltar
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useEvents } from '../composable/useEvents'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter
} from '@ionic/vue'
const route = useRoute()
const { eventos } = useEvents()
const router = useIonRouter()

const voltar = () => {
  router.back()
}
const evento = computed(() => {
  return eventos.value.find(e => e.id === Number(route.params.id))
})
</script>