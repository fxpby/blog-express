<template>
  <div class="index">
    <h5>{{ msg }}</h5>
    <!-- {{datahh}} -->
    <h1>博客首页</h1>

    <!-- <div id="blog-container">
      <div class="title-wrapper">
        <p class="title">
          <a href="/detail.html?id=${item.id}" target="_blank">${item.title}</a>
        </p>
        <div class="info-wrapper">
          <span>
            <a href="/index.html?author=${item.author}">${item.author}</a>
          </span>
          <span>${getFormatDate(item.createtime)}</span>
        </div>
      </div>
    </div> -->

<el-tooltip :content="'Switch value: ' + value" placement="top">
			 <el-switch
			    v-model="value"
			    active-color="#13ce66"
			    inactive-color="#ff4949"
			    active-value="100"
			    inactive-value="0">
			  </el-switch>
		</el-tooltip>

  </div>
</template>

<script>
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
</style>
