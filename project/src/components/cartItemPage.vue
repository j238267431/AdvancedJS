<template>
       <tr class="cart_products">
        <td class="Product_details">
            <div class="cart_item">
                <img id="picture" alt="item 1" :src="item.img">
                <div class="cart_dsecription">
                    <h3><a href="single_page.html">{{item.product_name}}</a></h3>
                    <p>Color: <span>Red</span></p>
                    <p>Size: <span>Xll</span></p> 
                </div>
            </div>
        </td>
        <td class="unite_price">{{item.price}} &#8381;</td>
        <td class="Quantity">
            <input  type="number" class="cart_qty_box" :value="item.quantity">
        </td>
        <td class="shipping">free</td>
        <td class="Subtotal">{{item.price * item.quantity}} &#8381;</td>
        <td class="ACTION"><a class="cart_action" @click.prevent="$emit('remove', item)" href="#"><i class="fas fa-times-circle"></i></a></td>
    </tr>
</template>


<script>
export default {
   name: 'cartItemPage',
   props: {item: Object}
}
</script>

<style scoped lang="scss">
    #picture {
        width:19%;
    }
</style>