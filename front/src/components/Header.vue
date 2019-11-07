<template>
  <div class="index">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">博文详情</el-menu-item>
      <el-menu-item index="2">
        <!-- <a href="https://www.ele.me" target="_blank"> -->
        博文管理
        <!-- </a> -->
      </el-menu-item>
      <el-menu-item index="3" style="float:right;">登陆</el-menu-item>
      <el-menu-item index="4" style="float:right;">注册</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "Index",
  data() {
    return {
      msg: "数据传过来了嘛 Index",
      datahh: []
    };
  },
  mounted() {
    // // 获取网络数据
    // this.axios
    //   .get("http://localhost:3000/api/blog/list")
    //   .then(response => {
    //     if (response.status === 200) {
    //       console.log(response);
    //     }
    //     this.datahh = response.data.data;
    //     // this.axios({
    //     //   url: "http://www.baidu.com",
    //     //   method: "get"
    //     // }).then(res => {
    //     //   console.log(res);
    //     // });
    //   })
    //   .catch(error => {
    //     alert("网络出现异常!");
    //   });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* *{
  margin: 0;
  padding: 0;
} */
</style>
