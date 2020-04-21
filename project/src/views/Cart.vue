<template>
  <div class="about">
    <h1>I am a Cart!!</h1>
    <div>
      {{ getCartData }}
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      arrMen: [],
      arrWomen: [],
    };
  },
  name: 'Cart',
};
</script>
