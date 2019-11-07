<template>
  <div class="login">
    <h5>Login---{{ msg }}</h5>
    {{datahh}}
    <p></p>
    <h1 style="border-bottom: 1px solid #ccc; padding-bottom: 10px;">创建博客</h1>
    <div>
      <div class="title-wrapper">
        <input id="text-title" />
      </div>
      <div class="content-wrapper">
        <textarea id="text-content"></textarea>
      </div>
      <div>
        <button id="btn-create">创建</button>
      </div>
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
.title-wrapper {
  margin-bottom: 10px;
}
.title-wrapper input {
  width: 300px;
}
.content-wrapper textarea {
  width: 300px;
  height: 150px;
}
</style>
