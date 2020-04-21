<template>
         <div class="single_page_first">
        <a @click="$emit('change', prod)" class="single_page_arrows" href="#">
          <i class="fas fa-angle-left"></i>
        </a>
        <!-- <img alt="women" src="../img/single_page.png"> -->
        <img id="size" alt="women" :src="'../'+prod.img" />
        <a @click="$emit('change', prod)" class="single_page_arrows" href="#">
          <i class="fas fa-angle-right"></i>
        </a>
      </div>
</template>

<script>
export default {
   name: 'carousel',
   props: {
      prod: Object,
      newProd: Object
   }
}
</script>