<template>
  <div class="login">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <div class="login-btn">
          <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        </div>
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "数据传过来了嘛 login",
      dataLogin: {},
      form: {
        username: "",
        password: ""
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    };
  },
  mounted() {
    // 获取网络数据
    // this.axios
    //   .get("http://localhost:3000/api/user/login")
    //   .then(response => {
    //     if (response.status === 200) {
    //       console.log(response);
    //     }
    //     this.dataLogin = response.msg;
    //   })
    //   .catch(error => {
    //     alert("网络出现异常!login");
    //   });
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航

          this.axios.post("/api/user/login")
          .then(response => {
            if (res.errno === 0) {
                // 登录成功
                this.$router.push("/Detail");
              } else {
                // 登录失败
                alert(res.message);
              }
          });
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
      // this.$router.push("/Index");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* *{
  margin: 0;
  padding: 0;
} */
.login {
  width: 100%;
  height: 100%;
}
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  height: 350px;
  /* height: 100%; */
  margin: 50px auto 100px;
  padding: 35px 35px 35px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background-color: #fff;
}

.login-title {
  text-align: center;
  margin: -50px auto 20px auto;
  color: #303133;
}
.login-btn {
  margin: 0 0 0 -80px;
  /* text-align: center; */
}
</style>
