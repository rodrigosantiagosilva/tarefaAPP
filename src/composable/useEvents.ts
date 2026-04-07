import { ref,watch } from 'vue'
import { useRouter } from 'vue-router'
interface Evento {
  id: number
  titulo: string
  descricao: string
  data: string
  favorito: 'yes' | 'no'
}


const eventos = ref<Evento[]>([
  { id: 1, titulo: 'Feira de Tecnologia', data: '10/04/2026',descricao:'coisas mto tecnologicas', favorito: 'no' },
  { id: 2, titulo: 'Workshop de Programação', data: '15/04/2026',descricao:'coisas mto tecnologicas vezes 2', favorito: 'no' },
  { id: 3, titulo: 'Palestra sobre IA', data: '20/04/2026',descricao:'coisas mto tecnologicas vezes 42000', favorito: 'no' },
  { id: 4, titulo: 'Raspagem de cracas do naviu', data: '10/11/1945',descricao:'NAVIUUUUUU', favorito: 'yes' },
  { id: 5, titulo: 'WOOOOOOOOW', data: '01/04/2077', descricao:'MUITOS WOOOOOWS',favorito: 'no' }
])

export function useEvents() {
  const router = useRouter()
  function irParaDetalhe(id: number) {
  router.push({name:'DetalhesdoEvento', params:{id}})
}
  function Favoritar(id: number) {
    const evento = eventos.value.find(e => e.id === id)
    if (evento) {
      evento.favorito = evento.favorito === 'yes' ? 'no' : 'yes'
    }
  }
const favoritos = ref<Evento[]>([])

watch(
  eventos,
  (eventosf) => {
    favoritos.value = eventosf.filter(e => e.favorito === 'yes')
  },
  { deep: true, immediate: true }
)
return {
  eventos,
  favoritos,
  Favoritar,
  irParaDetalhe
}
}