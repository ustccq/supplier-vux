<template>
  <div>
<!--     <tab :line-width=4 active-color='#ffffff'>
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === '未报价'" @click="curHeader = '未报价'">未报价</tab-item>
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === '已报价'" @click="curHeader = '已报价'">已报价</tab-item>
    </tab> -->
    <tab :line-width=4 :index.sync="orderIndex">
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === item" v-for="item in headerNames" @click="curHeader = item">{{item}}</tab-item>
    </tab>
    <flexbox>
      <flexbox-item>
        <cell :title="curTitle">i am a {{headerNames[orderIndex]}} boy</cell>
      </flexbox-item>
    </flexbox>
    <br/>
  </div>
</template>

<script>
import {Tab, TabItem} from 'vux-components/tab'
import Divider from 'vux-components/divider'
import Cell from 'vux-components/cell'
import {Flexbox, FlexboxItem} from 'vux-components/flexbox'
export default {
  components: {
    Tab,
    TabItem,
    Divider,
    Cell,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      headerNames: ['未报价', '已报价'],
      curHeader: '未报价',
      orderIndex: 0
    }
  },
  methods: {
    IndexChange (index) {
      this.orderIndex = index
    }
  },
  computed: {
    curTitle () {
      return 'hot girl' + this.headerNames[this.orderIndex]
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
