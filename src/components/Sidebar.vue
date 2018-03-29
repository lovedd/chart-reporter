/**
* 侧栏导航组件
*/

<template>
    <div class="container">
        <el-menu :default-active="$route.path" :router="true">
            <el-menu-item index="/welcome/welcome">欢迎页</el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>产品数据</template>
                <el-menu-item index="/product/current">活期产品</el-menu-item>
            </el-submenu>
            <!--<el-submenu index="2">-->
                <!--<template slot="title"><i class="el-icon-menu"></i>平台流量</template>-->
                <!--<el-menu-item index="/address-manage">app流量</el-menu-item>-->
                <!--<el-menu-item index="/order-manage">PC流量</el-menu-item>-->
            <!--</el-submenu>-->
            <!--<el-submenu index="3">-->
                <!--<template slot="title"><i class="el-icon-menu"></i>销售管理</template>-->
                <!--<el-submenu index="3-1">-->
                    <!--<template slot="title"><i class="el-icon-edit"></i>销售基础设置</template>-->
                    <!--<el-menu-item index="/sales_manage/sales_team">销售组</el-menu-item>-->
                    <!--<el-menu-item index="/sales_manage/customer_credit">客户信用</el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="3-1">-->
                    <!--<template slot="title"><i class="el-icon-edit"></i>销售业务管理</template>-->
                    <!--<el-menu-item index="/sales_manage/goods_bill">提货单</el-menu-item>-->
                    <!--<el-menu-item index="/sales_manage/sales_contract">销售合同</el-menu-item>-->
                <!--</el-submenu>-->
            <!--</el-submenu>-->
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  //    let active = window.sessionStorage.defaultActive || '/campus-manage'
  //
  //    return {
  //      defaultActive: active
  //    }
  },
  methods: {
  //    onSelected (index) {
  //      window.sessionStorage.defaultActive = index
  //      this.defaultActive = window.sessionStorage.defaultActive
  //    }
  }
}
</script>

<style scoped>
    .container {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }
</style>
