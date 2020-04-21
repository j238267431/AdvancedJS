<template>
   <body>
    <div class="new_arrivals_sector">
        <div class="new_arrivals">new arrivals</div>
        <ul class="bread_crumbs">
            <li><a class="bread_home bread_link" href="index.html">home/</a></li>
            <li><a class="bread_men bread_link" href="men.html">men/</a></li>
            <li><a class="bread_new bread_link" href="#">new arrivals</a></li>
        </ul>
    </div>
    <div class="men_product center">
        <div class="left_bar">
            <details open>
                <summary class="drop_down_summary">Category</summary>
                <ul class="drop_down_ul">
                    <li><a href="">Accessorie</a></li>
                    <li><a href="">Bag</a></li>
                    <li><a href="">Deni</a></li>
                    <li><a href="">Hoodies & Sweatshirt</a></li>
                    <li><a href="">Jackets & Coat</a></li>
                    <li><a href="">Pants Polo</a></li>
                    <li><a href="">Shirt</a></li>
                    <li><a href="">Shoe</a></li>
                    <li><a href="">Short</a></li>
                    <li><a href="">Sweaters & Knit</a></li>
                    <li><a href="">T-Shirts</a></li>
                    <li><a href="">Tanks</a></li>
                </ul>
            </details>
            <details>
                <summary class="drop_down_summary">brand</summary>
                <ul class="drop_down_ul">

                </ul>
            </details>
            <details>
                <summary class="drop_down_summary">designer</summary>
                <ul class="drop_down_ul">

                </ul>
            </details>
        </div>
        <div class="right_product">
            <div class="trending_now_right">
                <h3 class="trending_h">Trending now</h3>
                <ul class="right_ul">
                    <li class="span_right"><a class=link_right href="">Bohemian</a></li>
                    <li class="span_right"><a class=link_right href="">Floral</a></li>
                    <li class="span_right"><a class=link_right href="">Lace</a></li>
                    <li class="span_right"><a class=link_right href="">Floral</a></li>
                    <li class="span_right"><a class=link_right href="">Lace</a></li>
                    <li class="span_right"><a class=link_right href="">Bohemian</a></li>
                </ul>
            </div>
            <div class="size_right">
                <h3>size</h3>

                <ul class="size_ul">
                    <li class="size_boxes"><input type="checkbox" id="xxs" class="size_input"><label for="xxs" class="label_size size_xxs">xxs</label></li>
                    <li class="size_boxes"><input type="checkbox" id="xs" class="size_input"><label for="xs" class="label_size size_xs">xs</label></li>
                    <li class="size_boxes"><input type="checkbox" id="s" class="size_input"><label for="s" class="label_size size_s">s</label></li>
                    <li class="size_boxes"><input type="checkbox" id="m" class="size_input"><label for="m" class="label_size size_m">m</label></li>
                    <li class="size_boxes"><input type="checkbox" id="l" class="size_input"><label for="l" class="label_size size_l">l</label></li>
                    <li class="size_boxes"><input type="checkbox" id="xl" class="size_input"><label for="xl" class="label_size size_xl">xl</label></li>
                    <li class="size_boxes"><input type="checkbox" id="xxl" class="size_input"><label for="xxl" class="label_size size_xxl">xxl</label></li>
                </ul>
            </div>
            <div class="price_right">
                <h3>price</h3>
                <input type="range" id="range" value="10" step="0.1">
                <label for="range">
                    <p class="range_from">$52</p>
                    <p class="range_to">$400</p>
                </label>
            </div>
            <div class="sort">
                <div class="first">
                    <div class="sort_hover sort_sort_by"><a href="#">Sort By</a></div>
                    <div class="sort_hover sort_name"><a href="#">Name</a></div>
                </div>
                <div class="second">
                    <div class="sort_hover sort_show"><a href="#">Show</a></div>
                    <div class="sort_hover sort_figure"><a href="#">09</a></div>
                </div>
            </div>
            <div class="product-box center">

<prodMen/>

                <!-- <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_1.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_2.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_3.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_4.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_5.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_6.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_7.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_8.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article>
                <article class="product">
                    <a href="#"><img class="product__img" src="img/men/men_9.png" alt="product_1"></a>
                    <div class="product__content">
                        <a href="" class="product__name">Mango People T-shirt</a>
                        <p class="product__price">$52.00</p>
                    </div>
                    <a href="" class="product__add">Add to Cart
                    <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
                </a>
                </article> -->


            </div>
            <div class="middle_men">
                <div class="pagination_men">
                    <ul class="pagination_ul">
                        <li class="pagination_li"><a href="#" class="pagination_link"><i class="fas fa-angle-left"></i></a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link active_men">1</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">2</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">3</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">4</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">5</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">6</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">...</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link">20</a></li>
                        <li class="pagination_li"><a href="#" class="pagination_link"><i class="fas fa-angle-right"></i></a></li>

                    </ul>
                </div>
                <div class="men_view_all"><a class="men_view_all_link" href="#">View All</a></div>
            </div>

        </div>

    </div>

    <section class="right_block_men">
        <div class="offer_content_men">
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
</body>

</template>


<script>

import prodMen from '@/components/productsMen.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'men',
    data() {
        return {

        }
    },
    methods: {

    },
    components: { prodMen }
}
</script>