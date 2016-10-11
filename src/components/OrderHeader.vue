<template>
  <div>
<!--     <tab :line-width=4 active-color='#ffffff' @on-index-change="IndexChange">
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === '待确认'" @click="curHeader = '待确认'">待确认</tab-item>
    </tab> -->
    <tab :line-width=4 :index.sync="orderIndex">
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === item" v-for="item in headerNames" @click="curHeader = item">{{item}}</tab-item>
    </tab>
    <group :title="dateStr"></group>
    <flexbox v-show="0 == orderIndex">
      <flexbox-item>
        <ck-panel></ck-panel>
      </flexbox-item>
    </flexbox>
    <flexbox v-show="1 == orderIndex">
      <flexbox-item>
        <checklist title="order ci list" :options="orderCIList" :value.sync="checkedOrderCIList" @on-change="change"></checklist>
      </flexbox-item>
    </flexbox>
    <flexbox v-show="2 == orderIndex">
      <flexbox-item>
        <ck-panel2></ck-panel2>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import {Tab, TabItem} from 'vux-components/tab'
import Divider from 'vux-components/divider'
import Cell from 'vux-components/cell'
import {Flexbox, FlexboxItem} from 'vux-components/flexbox'
import XButton from 'vux-components/x-button'
import Group from 'vux-components/group'
import Checklist from 'vux-components/checklist'
import CheckPanel from './CheckPanel'
import CheckPanel2 from './CheckPanel2'

export default {
  components: {
    Tab,
    TabItem,
    Divider,
    Cell,
    Flexbox,
    FlexboxItem,
    XButton,
    Group,
    Checklist,
    'ck-panel': CheckPanel,
    'ck-panel2': CheckPanel2
  },
  data () {
    return {
      headerNames: ['待确认', '发货', '运输', '送达'],
      curHeader: '待确认',
      orderIndex: 1,
      orderCIList: [ 'ChinaChinaChina发货发货发货ChinaChinaChina发货发货发货ChinaChinaChina发货发货发货ChinaChinaChina发货发货发货', 'Japan', 'America' ],
      checkedOrderCIList: []
    }
  },
  methods: {
    IndexChange (index) {
      this.orderIndex = index
    },
    change (val) {
      console.log('change', val)
      console.log('selected', this.checkedOrderCIList)
    },
    btnClickFunc (i) {
      switch (i) {
        case 'Get':
          // this.$http.setHeader('Access-Control-Allow-Origin', '*')
          this.$http.get('http://dev.pickupstore.meixian.com/app/AdminUser/CrmLogin?name=liyiyi&pwd=111111').then((response) => {
            // success callback
            console.log(response.data)
          }, (response) => {
            // error callback
            console.log('error occur')
          })
          break
        case 'Post':
          this.$http.post('url', {token: 'wfewfewfwf'}).then((response) => {
            response.status
          }, (response) => {

          })
          break
        default:
          break
      }
    }
  },
  computed: {
    curTitle () {
      return 'hot boy' + this.headerNames[this.orderIndex]
    },
    dateStr () {
      let date = new Date()
      let m = date.getMonth() > 8 ? (date.getMonth() + 1) : ('0' + date.getMonth())
      let d = date.getDate() > 9 ? date.getDate() : ('0' + date.getDate())
      return date.getFullYear() + '/' + m + '/' + d
    }
  }
}
</script>

<style lang="less">
@import '../styles/1px.less';
 .supplierheader {
    background-color: #34495E !important;
    border-color: #FEFEFF !important;
    color: #C1C2C3 !important;
    padding-bottom: 1px !important;
 }
 .activeheader {
  color: #FFFFFF !important;
 }
</style>
