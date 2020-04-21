<template>
   <body>
<section class="new_arrivals_sector">
    <div class="new_arrivals">new arrivals</div>
    <ul class="bread_crumbs">
        <li><a class="bread_home bread_link" href="/">home/</a></li>
        <li><a class="bread_men bread_link" href="/men">men/</a></li>
        <li><a class="bread_new bread_link" href="#">new arrivals</a></li>
    </ul>
</section>
    <details class="address center" open>
        <summary class="address_shipping">01. Shipping Address</summary>
        <div class="div_shipping_address">
            <article class="guest">
                <h3 class="check_as_guest">Check as a guest or register</h3>
                <p class="Register_future">Register with us for future convenience</p>
                <form action="#">
                    <div class="radio_one">
                        <input id="register_radio" name="radio_register" type="radio">
                        <label class="radio_button" for="register_radio">checkout as guest</label>
                    </div>
                    <div class="radio_two">
                        <input checked id="register_radio2" name="radio_register" type="radio">
                        <label class="radio_button" for="register_radio2">register</label>
                    </div>
                </form>
                <ul class="Register_with_ul">
                    <h3 class="Register_with">register and save time!</h3>
                    <p>Register with us for future convenience</p>
                    <li class="register_li"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</li>
                    <li class="register_li"><i class="fas fa-angle-double-right"></i> Easy access to your order history
                        and
                        status
                    </li>
                </ul>
                <a class="button_women" href="#" style="margin-top: 38px">continue</a>
            </article>
            <article class="registered">
                <h3 class="Already_registered">Already registered?</h3>
                <p class="registered_log_in">Please log in below</p>

                <form action="#" class="registered_form">
                    <p class="registered_email">EMAIL ADDRESS<span class="red_star">*</span></p>
                    <input class="input_email_women" type="email">
                    <p class="registered_password">password<span class="red_star">*</span></p>
                    <input class="input_password_women" type="password">

                    <p class="register_required"><span class="red_star_requered">*</span>required fields</p>
                    <div class="registered_forgot_div">
                        <input class="button_women" type="submit" value="log in">
                        <a class="registered_forgot" href="#">Forgot Password ?</a>
                    </div>
                </form>
            </article>
        </div>
    </details>
    <details class="address center">
        <summary class="address_shipping">02. BILLING INFORMATION</summary>
    </details>
    <details class="address center">
        <summary class="address_shipping">03. SHIPPING INFORMATION</summary>
    </details>
    <details class="address center">
        <summary class="address_shipping">04. SHIPPING METHOD</summary>
    </details>
    <details class="address center">
        <summary class="address_shipping">05. PAYMENT METHOD</summary>
    </details>
    <details class="address center">
        <summary class="address_shipping last_border">06. ORDER REVIEW</summary>
    </details>

</body>

</template>