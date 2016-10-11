<template>
  <div>
    <tabbar @click="switchItem">
          <!-- <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" selected badge="$" @click="switchitem1" link="http://pms.hezu.us"> -->
      <tabbar-item v-link="{path:'/Order'}" selected badge="$" :icon-class="orderIconClass">
      <!-- <tabbar-item v-link="{path:'/Order'}" :selected="isOrder" badge="$" :icon-class="$parent.index !== this.index ? 'classIconA' : 'classIconB'" @click="switchitem1"> -->
<!--         <img slot="icon" src="../assets/tabicon/tab_bill.png" v-show="!billshow">
        <img slot="icon" src="../assets/tabicon/tab_bill_sel.png" v-show="billshow"> -->
        <span slot="label">订单</span>
      </tabbar-item>
          <!-- <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" show-dot @click="switchitem2"> -->
      <tabbar-item v-link="{path:'/Offer'}" show-dot :icon-class="offerIconClass">
      <!-- <tabbar-item v-link="{path:'/Offer'}" selected :selected="route.path === '/OfferHeader'" show-dot @click="switchitem2"> -->
<!--         <img slot="icon" src="../assets/tabicon/tab_offer.png" v-show="!offershow">
        <img slot="icon" src="../assets/tabicon/tab_offer_sel.png" v-show="offershow"> -->
        <span slot="label">报价</span>
      </tabbar-item>
      <!-- <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" @click="switchitem3"> -->
      <tabbar-item v-link="{path:'/Bill'}" :icon-class="billIconClass">
      <!-- <tabbar-item v-link="{path:'/Bill'}" :selected="route.path === '/BillHeader'" @click="switchitem3"> -->
<!--         <img slot="icon" src="../assets/tabicon/tab_order.png" v-show="!ordershow">
        <img slot="icon" src="../assets/tabicon/tab_order_sel.png" v-show="ordershow"> -->
        <span slot="label">账单</span>
      </tabbar-item>
      <!-- <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" @click="switchitem4"> -->
      <tabbar-item v-link="{path:'/Personal'}" :icon-class="personalIconClass">
      <!-- <tabbar-item v-link="{path:'/Personal'}" :selected="route.path === '/PersonalHeader'" @click="switchitem4"> -->
<!--         <img slot="icon" src="../assets/tabicon/tab_personal.png" v-show="!personalshow">
        <img slot="icon" src="../assets/tabicon/tab_personal_sel.png" v-show="personalshow"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  // import store from './vuex/store'
  import {Tabbar, TabbarItem} from 'vux-components/tabbar'
  // import Loading from 'vux-components/loading'
  // import ViewBox from 'vux-components/view-box'
  // import XHeader from 'vux-components/x-header'

  export default {
    components: {
      Tabbar,
      TabbarItem
      // Loading,
      // ViewBox,
      // XHeader
    },
  // store: store,
  // vuex: {
  //   getters: {
  //     route: (state) => state.route,
  //     isLoading: (state) => state.isLoading,
  //     direction: (state) => state.direction
  //   }
  // },
    data () {
      return {
        routerTransition: {
          forward: 'slideRL',
          back: 'slideLR'
        },
        iconClasss: ['orderIconClass', 'offerIconClass', 'billIconClass', 'personalIconClass'],
        orderIconClass: 'orderIconSelected',
        offerIconClass: 'offerIcon',
        billIconClass: 'billIcon',
        personalIconClass: 'personalIcon',
        preIndex: 0
      }
    },
    events: {
      'hook:created': function () {
        console.log('created!')
      }
    },
    methods: {
      scrollTop () {
        this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
      },
      switchItem () {
        console.log(this.iconClasss)
        let curIndx = this.$children[0].index
        if (curIndx !== this.preIndex) {
          this.turnOnIcon(curIndx)
          this.turnOffIcon(this.preIndex)
          this.preIndex = curIndx
        }
      },
      turnOnIcon (index) {
        this[this.iconClasss[index]] += 'Selected'
        console.log(this[this.iconClasss[index]])
      },
      turnOffIcon (index) {
        let ss = this[this.iconClasss[index]].split('Selected')
        this[this.iconClasss[index]] = ss[0]
      }
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.route.path !== '/'
        }
      },
      headerTransition () {
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      componentName () {
        const parts = this.route.path.split('/')
        if (/component/.test(this.route.path) && parts[2]) return parts[2]
      },
      isDemo () {
        console.log(this)
        return /component|demo/.test(this.route.path)
      },
      isOrder () {
        return /OrderHeader/.test(this.route.path)
      },
      isOffer () {
        return /OfferHeader/.test(this.route.path)
      },
      isBill () {
        return /BillHeader/.test(this.route.path)
      },
      isPersonal () {
        return /Personaleader/.test(this.route.path)
      },
      isTabbarDemo () {
        return /tabbar/.test(this.route.path)
      },
      title () {
        if (this.route.path === '/') return 'Home'
        if (this.route.path === '/project/donate') return 'Donate'
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
      }
    }
}
</script>

<style lang="less">
@import '../styles/index.less';
@import '../styles/weui/base/reset';

.orderIconSelected {
  background-image: url("../assets/tabicon/tab_order_sel.png");
  background-size:cover;
}
.orderIcon {
  background-image: url("../assets/tabicon/tab_order.png");
  background-size:cover;
}
.offerIconSelected {
  background-image: url("../assets/tabicon/tab_offer_sel.png");
  background-size:cover;
}
.offerIcon {
  background-image: url("../assets/tabicon/tab_offer.png");
  background-size:cover;
}
.billIconSelected {
  background-image: url("../assets/tabicon/tab_bill_sel.png");
  background-size:cover;
}
.billIcon {
  background-image: url("../assets/tabicon/tab_bill.png");
  background-size:cover;
}
.personalIconSelected {
  background-image: url("../assets/tabicon/tab_personal_sel.png");
  background-size:cover;
}
.personalIcon {
  background-image: url("../assets/tabicon/tab_personal.png");
  background-size:cover;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #fbf9fe;
}
/* v-r-transition, default is {forward: 'forward', back: 'back'}*/
.forward-enter, .forward-leave {
  transform: translate3d(-100%, 0, 0);
}
.back-enter, .back-leave {
  transform: translate3d(100%, 0, 0);
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui_tabbar.vux-demo-tabbar {
  backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);
}
.vux-demo-tabbar .weui_bar_item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {
  color: #35495e;
}
.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui_tabbar_icon + .weui_tabbar_label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.weui_tab_bd {
  padding-top: 46px;
}

/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
