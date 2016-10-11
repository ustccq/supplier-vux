<template>
  <div>
    <order-panel header="" :footer="footer" :list="list" :type="type"></orderpanel>
  </div>
</template>

<script>
import OrderPanel from './meixian/OrderPanel2'
import Group from 'vux-components/group'
import Radio from 'vux-components/radio'

export default {
  components: {
    OrderPanel,
    Group,
    Radio
  },
  data () {
    return {
      type: 'checkbox',
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角1',
        amount: '500',
        price: '5.00',
        count: '500',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角1 白不老豆角1',
        url: ''
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角2',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角2   白不老豆角2 白不老豆角2   白不老豆角2 白不老豆角2   白不老豆角2 白不老豆角2   白不老豆角2',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角3',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角3 白不老豆角3',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        name: '白不老豆角4',
        amount: '600',
        price: '6.00',
        count: '600',
        unit: '斤',
        level: '一等品',
        brand: '德清源安心品牌',
        format: '500-1000g',
        desc: '白不老豆角4 白不老豆角4',
        url: {
          path: '',
          replace: false
        }
      }],
      footer: {
        name: '查看更多',
        url: 'http://pms.hezu.us'
      }
    }
  }
}
</script>