import Vue from 'vue'

// import Button from "ant-design-vue/lib/button"
// import Table from "ant-design-vue/lib/table"
// import Form from "ant-design-vue/lib/form"
// import Input from "ant-design-vue/lib/input"
// import Tooltip from "ant-design-vue/lib/tooltip"
// import Icon from "ant-design-vue/lib/icon"
// import Cascader from "ant-design-vue/lib/cascader"
// import Select from "ant-design-vue/lib/select"
// import AutoComplete from "ant-design-vue/lib/auto-complete"
// import Row from "ant-design-vue/lib/row"
// import Col from "ant-design-vue/lib/col"
// import Checkbox from "ant-design-vue/lib/checkbox"

import App from './App.vue'

import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"

import router from './router'

// Vue.component(Button.name, Button)
// Vue.component(Table.name, Table)
// Vue.component(Form.name, Form)
// Vue.component(Input.name, Input)
// Vue.component(Tooltip.name, Tooltip)
// Vue.component(Icon.name, Icon)
// Vue.component(Cascader.name, Cascader)
// Vue.component(Select.name, Select)
// Vue.component(Row.name, Row)
// Vue.component(Col.name, Col)
// Vue.component(Checkbox.name, Checkbox)

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
