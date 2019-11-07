<template>
  <div class="login">
    <h5>Login---{{ msg }}</h5>
    {{datahh}}
    <p></p>
    <h1 id="title" class="title"></h1>detail
    <div id="info-container" class="info-container"></div>
    <div class="content-wrapper">
      <p id="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "数据传过来了嘛 login",
      dataLogin: {}
    };
  },
  mounted() {
    // 获取网络数据
    this.axios
      .get("http://localhost:3000/api/user/login-test")
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
        this.dataLogin = response.msg;
        // this.axios({
        //   url: "http://www.baidu.com",
        //   method: "get"
        // }).then(res => {
        //   console.log(res);
        // });
      })
      .catch(error => {
        alert("网络出现异常!");
      });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0 20px;
  line-height: 1;
}
a {
  text-decoration-line: none;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
.info-container span,
.info-container a {
  font-size: 14px;
  color: #999;
}
.content-wrapper {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
</style>
