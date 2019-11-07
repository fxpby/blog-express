<template>
  <div class="admin">
    <h5>{{ msg }}</h5>
    {{datahh}}
    <p></p>
    <h1 style="border-bottom: 1px solid #ccc; padding-bottom: 10px;">管理中心</h1>
    <p>
      <a href="/new.html">新建博客</a>
    </p>
    <div style="margin-bottom: 10px;">
      <input id="text-keyword" />
      <button id="btn-search">搜索</button>
    </div>
    <table id="table-container">
      <tr>
        <th>博客标题</th>
        <th colspan="2">操作</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      msg: "数据传过来了嘛???",
      datahh: []
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
  cursor: pointer;
}
table {
  border: 1px solid #ccc;
}
table th {
  text-align: left;
  background-color: #f1f1f1;
}
table td:nth-child(1) {
  width: 300px;
}
</style>
