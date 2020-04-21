<template>
<div>
     <section class="subscribe center subscribe_men">
        <div class="backgorund">

            <figure><img src="img/subscribe/sub_picture.png" alt=""></figure>
            <figcaption class="sub_one">
                <p id="pick1" v-show="pick1" class="vestibulum" :class="{slideinleft: pick1, slideoutright: !pick1}">“1”</p>
                <p id="pick2" v-show="pick2" class="vestibulum" :class="{slideinleft: pick2, slideoutright: !pick2}">“2”</p>
                <p id="pick3" v-show="pick3" class="vestibulum" :class="{slideinleft: pick3, slideoutright: !pick3}">“3Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
   
                
                <p class="bin">Bin Burhan</p>
                <p class="dhaka">Dhaka, Bd</p>
                <div class="pagination_block">
                   <button id="button" class="pagination" :class="{ active: pick1 }" @click="slider1" href="#"></button>
                   <button id="button" class="pagination" :class="{ active: pick2 }" @click="slider2" href="#"></button>
                   <button id="button" class="pagination" :class="{ active: pick3 }" @click="slider3" href="#"></button>
                </div>
            </figcaption>
            <div class="sub_two">
                <p class="sub_two_sub">subscribe</p>
                <p class="newletter">for our newletter and promotion</p>
                <form class="sub_form" action="#">
                   <div id="email">
                    <input @keyup="checkEmail" v-model="email" type="email" class="sub_input_height input_sub" placeholder="Enter Your Email">
                  <span id="message" v-show="msg">E-mail должен быть похож на mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'</span>
                    </div>
                    <input @click="checkEmail" class="sub_button box_shadov_click text_shadow" type="submit" value="subscribe" :disabled="msg" :class="{ disabledButton: msg }">
                    <!--<div class="sub_button box_shadov_click text_shadow"><a href="#">subscribe</a></div>-->
                </form>
            </div>
        </div>
    </section>
    <footer class="footer center">
        <div class="footer_brand">
            <a class="logo" href="index.html"><img class="logo__img" src="img/logo.png" alt="logo"><span class="text_shadow">BRAN<span class="D bounce-in-bck">D</span></span></a>
            <div class="footer_content_brand">
                <p class="Objectively">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
                <p class="efficiently">Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize. Objectively strategize seamless relationships via resource sucking testing procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy. Compellingly envisioneer corporate methods of empowerment before standards compliant technologies. Objectively facilitate progressive.</p>
            </div>
        </div>


        <ul class="footer_company">
            <p class="footer_head">COMPANY</p>
            <li class="footer_list"><a href="index.html" class="footer__link">Home</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Shop</a></li>
            <li class="footer_list"><a href="#" class="footer__link">About</a></li>
            <li class="footer_list"><a href="#" class="footer__link">How It Works</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Contact</a></li>
        </ul>

        <ul class="footer_information">
            <p class="footer_head">INFORMATION</p>
            <li class="footer_list"><a href="#" class="footer__link">Tearms & Condition</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Privacy Policy</a></li>
            <li class="footer_list"><a href="#" class="footer__link">How to Buy</a></li>
            <li class="footer_list"><a href="#" class="footer__link">How to Sell</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Promottion</a></li>
        </ul>
        <ul class="footer_shop">
            <p class="footer_head">SHOP CATEGORY</p>
            <li class="footer_list"><a href="men.html" class="footer__link">Men</a></li>
            <li class="footer_list"><a href="women.html" class="footer__link">Women</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Child</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Apparel</a></li>
            <li class="footer_list"><a href="#" class="footer__link">Brows All</a></li>
        </ul>
    </footer>

    <footer class="bottom_footer">
        <div>
            <p class="rights">&copy; 2020 Brand All Right Reserved</p>
        </div>
        <div class="social_links">
            <div class="bottom_footer_img box_shadov_click box_shadow"><a class="face" href="#"><i class="fab fa-facebook-f"></i></a></div>
            <div class="bottom_footer_img box_shadov_click box_shadow"><a class="face" href="#"><i class="fab fa-twitter"></i></a></div>
            <div class="bottom_footer_img box_shadov_click box_shadow"><a class="face" href="#"><i class="fab fa-linkedin-in"></i></a></div>
            <div class="bottom_footer_img box_shadov_click box_shadow"><a class="face" href="#"><i class="fab fa-pinterest-p"></i></a></div>
            <div class="bottom_footer_img box_shadov_click box_shadow"><a class="face" href="#"><i class="fab fa-google-plus-g"></i></a></div>
        </div>
    </footer>
    </div>
</template>


<script>


export default {
   data () {
      return {
         email: '',
         msg: false,
         pick1: true,
         pick2: false,
         pick3: false,
         switch1: true,
         switch2: false,
         switch3: false,
      }
   },
   methods:{
      checkEmail() {
         let regExp = new RegExp(/^[\w._-]+@\w+\.[a-z]{2,4}$/, 'i')
         if (regExp.test(this.email)) {
            this.msg = false
         } else {
            this.msg = true
      }
   },
   slider1() {
      this.pick1 = true
      this.pick2 = false
      this.pick3 = false

   },
   slider2() {
      this.pick1 = false
      this.pick2 = true
      this.pick3 = false
   },
   slider3() {
      this.pick1 = false
      this.pick2 = false
      this.pick3 = true
   }
   
}
}

// <figure v-for="el of getReview.list" :key="el.id" v-show="isActive(el.id)">
//       <img class="review__photo" :src="el.user.photo" alt="photo">
//       <div class="review__block">
//         <p class="review__message">“{{ el.message }}”</p>
//         <h3 class="review__user-name">{{ el.user.name }}</h3>
//         <h4 class="review__user-city">{{ el.user.city }}, {{ el.user.country }}</h4>
//       </div>
//     </figure>


</script>





<style lang="scss">
#email {
   position: relative;
}
#message {
   position: absolute;
   color: red;
   font-size: 10px;
   top: 54px;
   left: 10px;
}
.disabledButton{
   // color:rosybrown;
   background-color: gray;
}

.switch-transiion {
   transition: all .5s ease-in-out;
   }
.switch-Enter {
   left: 100%
}
.switch-leave {
   left: -100%
   }

#button {
   cursor: pointer;
   outline: none;
   }

   .slideinleft {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
.slideoutright {
	-webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}

</style>