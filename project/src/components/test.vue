<template>
<div>
      <button @click="change" >change</button>
   <transition name="component-fade" mode="out-in"     before-enter="beforeEnter">


  <component v-bind:is="view"></component>
</transition>
</div>
</template>


<script>

import va from '@/components/va.vue'
import vb from '@/components/vb.vue'

export default {
   name: 'test',
   data(){
      return{
         view: 'va'
      }
   },
  components: {
    va, vb
  },
  methods: {
     change(){
        this.view === 'va'? this.view = 'vb' : this.view = 'va'
     }
  }
}
</script>

<style lang="scss">
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>