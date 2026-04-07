import {ref} from 'vue'

const name = ref('Usuário')
const email = ref('email@email.com')
const editando = ref(false)


function editar(){
    editando.value = true
}
    


function salvar() {
    editando.value = false
   
}




function cancelar() {
    editando.value = false
}


export function usePerfil() {
  return {
    name,
    email,
    editando,
    editar,
    salvar,
    cancelar
  }
}