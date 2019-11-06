<template>
  <div class="admin">
    <h5>{{ msg }}</h5>
    {{datahh}}
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

</style>
