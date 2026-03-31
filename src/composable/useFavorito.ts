import { ref } from 'vue'

interface Evento {
  id: number
  titulo: string
  data: string
  favorito: 'yes' | 'no'
}

export function useFavorito() {
  const eventos = ref<Evento[]>([
    { id: 1, titulo: 'Feira de Tecnologia', data: '10/04/2026', favorito: 'no' },
    { id: 2, titulo: 'Workshop de Programação', data: '15/04/2026', favorito: 'no' },
    { id: 4, titulo: 'Palestra sobre IA', data: '20/04/2026', favorito: 'no' },
    { id: 5, titulo: 'Raspagem de cracas do naviu', data: '10/11/1945', favorito: 'yes' },
    { id: 6, titulo: 'WOOOOOOOOW', data: '01/04/2077', favorito: 'no' }
  ])

function Favoritar(id: number) {
  const evento = eventos.value.find(e => e.id === id)
  if (evento) {
    evento.favorito = evento.favorito === 'yes' ? 'no' : 'yes'
  }
}

  return {
    eventos,
    Favoritar
  }
}