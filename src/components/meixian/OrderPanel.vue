<template>
  <div class="weui_panel weui_panel_access">
    <div class="weui_panel_hd" v-if="header" @click="onClickHeader" v-html="header"></div>
    <div class="weui_panel_bd">
      <!--type==='1'-->
      <label :href="getUrl(item.url)" for="checkbox_{{uuid}}_{{index}}" v-for="(index, item) in list" @click.prevent="onItemClick(item)" class="weui_media_box weui_media_appmsg">
        <div class="weui_cell_hd" v-if="type=== 'checkbox'">
          <input type="checkbox" class="weui_check" value="{{item | getKey}}" v-model="value" id="checkbox_{{uuid}}_{{index}}">
          <i class="weui_icon_checked"></i>
        </div>
        <div class="weui_media_bd">
            <div><b>{{item.name}}</b><span class='text-right'>￥{{item.amount}}</span></div>
            <div><span>采购价￥{{item.price}}</span><span class='text-right'>{{item.count}}斤</span></div>
            <div>
              <span class='text-tail-space text-gray'>{{item.level}}</span>
              <span class='text-tail-space text-gray'>{{item.brand}}</span>
              <span class='text-gray'>{{item.format}}</span>
            </div> 
            <div class='text-gray text-inline'>商品描述：{{item.desc}}</div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { go, getUrl } from '../libs/router'
import Divider from 'vux-components/divider'
import {Flexbox, FlexboxItem} from 'vux-components/flexbox'
import { getValue, getKey } from './object-filter'

export default {
  compoents: {
    Divider,
    Flexbox,
    FlexboxItem
  },
  filters: {
    getValue,
    getKey
  },
  props: {
    header: String,
    footer: Object,
    list: Array,
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    getUrl (url) {
      return getUrl(url, this.$router)
    },
    onClickFooter () {
      this.$emit('on-click-footer')
      go(this.footer.url, this.$router)
    },
    onClickHeader () {
      this.$emit('on-click-header')
    },
    onItemClick (item) {
      this.$emit('on-click-item', item)
      go(item.url, this.$router)
    }
  },
  watch: {
    value (newVal) {
      this.$emit('on-change', JSON.parse(JSON.stringify(newVal)))
    }
  }
}
</script>

<style lang="less">
.text-right {
  text-align: right;
  float: right;
  }
.text-tail-space {
  margin-right: 0.5em;
}
.text-gray {
  color: gray;
}
.text-inline {
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
@import '../../styles/weui/widget/weui_panel/weui_panel';
@import '../../styles/weui/widget/weui_media_box/weui_media_box';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_check';

.weui_cells_checkbox > label > * {
  pointer-events: none;
}
.weui_cells > a {
  color:#000;
}
</style>