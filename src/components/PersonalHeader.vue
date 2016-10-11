<template>
  <div>
    <tab :line-width=4 active-color='#ffffff'>
      <tab-item class="supplierheader" active-class="activeheader" :selected="curHeader === 'name'" @click="curHeader = 'name'">name</tab-item>
    </tab>
    <br/>
  </div>
</template>

<script>
import {Tab, TabItem} from 'vux-components/tab'
import Divider from 'vux-components/divider'
export default {
  components: {
    Tab,
    TabItem,
    Divider
  },
  data () {
    return {
      curHeader: 'name'
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
