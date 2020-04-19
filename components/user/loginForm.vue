<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" type="username" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "13800138000",
        password: "123456"
      },
      // 表单规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      // 判断element的表单验证是否通过, element的表单都有一个validate这个方法
      // this.$refs.form.validate((valid)=>{
      //   if(valid){
      //     this.$store.dispatch('user/login',this.form).then(res=>{
      //       this.$message.success('登录成功')
      //       this.$router.push("/")
      //     })
      //   }
      // })
      // 第二种写法
      this.$refs.form.validate( async (valid) => {
        if (valid) {
          const res = await this.$store.dispatch("user/login", this.form);
          this.$message.success("登录成功" + res.user.nickname);
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
