<template>
  <div class="app">
    <!-- <Index></Index> -->
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          
        </el-aside>
        <el-main>
          
          <Login/>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Index from "../src/components/Index";
import Header from "../src/components/Header";
import Login from "../src/components/Login";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "App",
  components: {
    Index,
    Header,
    Login
  },
  data() {
    return {
      msg: "数据传过来了嘛 app???",
      datahh: [], 
      activeIndex: "1"
    };
  },
  mounted() {
    // 获取网络数据
    this.axios
      .get("http://localhost:3000/api/blog/list")
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
        this.datahh = response.data.data;
        
      })
      .catch(error => {
        alert("网络出现异常!App.vue");
      });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
