import Vue from 'vue'
<<<<<<< HEAD
import { Button, Form, FormItem, Input, Message } from 'element-ui'
=======
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox
} from 'element-ui'
>>>>>>> user

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
<<<<<<< HEAD
// 将弹框组件挂载到Vue的原型对象上
Vue.prototype.$message = Message
=======
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
// 将弹框组件挂载到Vue的原型对象上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
>>>>>>> user
