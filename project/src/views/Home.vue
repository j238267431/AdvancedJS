<template>
<body>

<div id="app">
    <section class="promo center">
        <article class="promo__content tracking-in-contract-bck-top">
            <h2 class="promo__h2">THE BRAND</h2>
            <h3 class="promo__h3">OF LUXERIOUS <span class="promo__color">FASHION</span></h3>
        </article>
    </section>

    <section class="hotDeal center">
        <article class="block1">
            <div class="men text_shadow"><a href="#" class="hotdeal-link"><img class="box_shadov_click_image" src="img/hotDealMen.png" alt=""></a>
                <a href="#">
                    <div class="banner-men pulsate-fwd">
                        <p class="banner_hot">HOT DEAL</p>
                        <p class="banner_FOR">FOR MEN</p>
                    </div>
                </a>
            </div>
            <div class="accesories text_shadow"><a href="#" class="hotdeal-link"><img class="  box_shadov_click_image" src="img/accesories.png" alt=""></a>
                <a href="#">
                    <div class="banner-men pulsate-fwd">
                        <p class="banner_hot">LUXIROUS & trendy</p>
                        <p class="banner_FOR">ACCESORIES</p>
                    </div>
                </a>
            </div>
        </article>
        <div class="block2">
            <div class="women text_shadow"><a href="#" class="hotdeal-link"><img class="  box_shadov_click_image" src="img/women.png" alt=""></a>
                <a href="#">
                    <div class="banner-men pulsate-fwd">
                        <p class="banner_hot">30% offer</p>
                        <p class="banner_FOR">women</p>
                    </div>
                </a>
            </div>
            <div class="kids text_shadow"><a href="#" class="hotdeal-link"><img class="  box_shadov_click_image" src="img/kids.png" alt=""></a>
                <a href="#">
                    <div class="banner-men pulsate-fwd">
                        <p class="banner_hot">new arrivals</p>
                        <p class="banner_FOR">for kids</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <div class="Featured_header">
        <p class="Featured_header_1">Featured Items</p>
        <p class="Featured_header_2">Shop for items based on what we featured in this week</p>
    </div>

    <products ref="test"/>

    <div class="button_two">
        <a class="button_women center box_shadov_click" href="#">Browse All Product</a>
    </div>

    <section class="offer_for_women">
        <img src="img/offer_picture.png" alt="">
        <section class="right_block">
            <div class="offer_content">
                <img class="offer_picture" src="img/offer/truck.png" alt="truck">
                <article class="text">
                    <p class="free_Delivery">Free Delivery</p>
                    <p class="world_wide">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models </p>
                </article>
            </div>
            <article class="offer_content">
                <img class="offer_picture" src="img/offer/percent.png" alt="%">
                <div class="text">
                    <p class="free_Delivery">Sales & discounts</p>
                    <p class="world_wide">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models</p>
                </div>
            </article>

            <article class="offer_content">
                <img class="offer_picture" src="img/offer/crown.png" width="109px" alt="%">
                <div class="text">
                    <p class="free_Delivery">Quality assurance</p>
                    <p class="world_wide">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models</p>
                </div>
            </article>
        </section>
    </section>
</div>


</body>
</template>

<script>
// @ is an alias to /src
import products from '@/components/products.vue';

export default {
  name: 'Home',
  components: {
    products,
  },
};
</script>
