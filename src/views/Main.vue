<template>
  <div class="signinpanel">
    <el-row>
      <el-col :span="14">
        <div class="signin-info" style="display: none;">
          <div class="logopanel m-b">
            <h1>
              <img alt="[ 若依 ]" src="../assets/imgs/ruoyi.png" />
            </h1>
          </div>
          <div class="m-b"></div>
          <h4>
            欢迎使用
            <strong>阳光学校双积分</strong>
          </h4>
          <ul class="m-b">
            <li>
              <i class="fa fa-arrow-circle-o-right m-r-xs"></i> SpringBoot
            </li>
            <li>
              <i class="fa fa-arrow-circle-o-right m-r-xs"></i> Mybatis
            </li>
            <li>
              <i class="fa fa-arrow-circle-o-right m-r-xs"></i> Shiro
            </li>
            <li>
              <i class="fa fa-arrow-circle-o-right m-r-xs"></i> Thymeleaf
            </li>
            <li>
              <i class="fa fa-arrow-circle-o-right m-r-xs"></i> Bootstrap
            </li>
          </ul>
          <strong>
            还没有账号？
            <a href="#">立即注册&raquo;</a>
          </strong>
        </div>
      </el-col>
      <el-col :span="10" :offset="14">
        <form id="signupForm">
          <h4 class="no-margins" style="display: none;">登录：</h4>
          <p class="m-t-md">犇犇学院视频</p>
          <div class="wrap-info">
            <img src="../assets/imgs/zhanghao.png" alt />
            <input
              type="text"
              name="username"
              class="yonghu"
              placeholder="用户名"
              style="color: #007f4f"
              v-model="username"
            />
          </div>
          <div class="wrap-info">
            <img src="../assets/imgs/password.png" alt />
            <input
              type="password"
              name="password"
              class="yonghu"
              placeholder="密码"
              v-model="password"
            />
          </div>
          <button
            type="button"
            class="btn btn-success btn-block"
            id="btnSubmit"
            @click="userLogin"
            data-loading="正在验证登录，请稍后..."
          >登录</button>
        </form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
export default {
  name: "Main",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    async userLogin() {
      let _this = this;
      let userName = _this.username;
      if (userName === "" || userName.length === 0) {
        _this.$message({
          message: "请输入用户名",
          type: "warning"
        });
        return false;
      }
      let password = _this.password;
      if (password === "" || password.length === 0) {
        _this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return false;
      }
      let base64Password = Base64.encode(password);
      const result = await _this.$store.dispatch("loginStore/userLogin", {
        username: userName,
        password: base64Password
      });
      if (result.success === true) {
        const data = result.data;
        let realName = data.userName;
        let studentId = data.userid;
        _this.$store.commit("loginStore/setCurrentUser", {
          realName: realName,
          studentId: studentId
        });
        _this.$router.push("dashBoard");
      } else {
        _this.$message.error(result.msg);
      }
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "signin";
  }
};
</script>

<style scoped>
template {
  height: 100%;
  width: 100%;
}
/* body {
  margin: 0;
  padding: 0;
  height: 1000px;
} */
/* body.signin {
  background: url(../assets/imgs/login-background.jpg) no-repeat center fixed;
} */

.loginDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: "100%";
  height: "100%";
  margin: 0 auto;
  color: #fff;
}
label.error {
  position: inherit;
}
/* body.signin {
    background: url(../img/login-background.jpg) no-repeat center fixed;
}*/
.signinpanel form {
  text-align: center;
}
.m-t-md {
  color: #007f4f;
  font-size: 24px;
}
.wrap-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  margin: 20px auto;
  border-bottom: 1px solid #007f4f;
}
.wrap-info img {
  margin-right: 30px;
}
.yonghu {
  background: transparent;
  border: none;
}
input {
  color: #007f4f !important;
}
input:-internal-autofill-selected {
  background-color: transparent !important;
  color: #007f4f !important;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  outline: none;
}
input:focus {
  outline: none;
  color: #007f4f;
}
.btn-success {
  background-color: #0e8b5c;
  border-color: #0e8b5c;
  color: #ffffff;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
.code-wrap {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #007f4f;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
}
.col-xs-6 {
  padding-left: 0;
  padding-right: 0;
}
::-webkit-input-placeholder {
  color: #007f4f;
} /* 使用webkit内核的浏览器 */
:-moz-placeholder {
  color: #007f4f;
} /* Firefox版本4-18 */
::-moz-placeholder {
  color: #007f4f;
} /* Firefox版本19+ */
:-ms-input-placeholder {
  color: #007f4f;
}
.checkbox-custom {
  display: block;
  margin: 20px auto;
  text-align: left;
}
.checkbox-custom label {
  margin-left: 30px;
  color: #007f4f;
}
.signinpanel .btn {
  height: 45px;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  background-color: #0e8b5c;
  border-color: #0e8b5c;
  color: #ffffff;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
  outline: none;
}
.btn-block {
  width: 100%;
  border: none;
}
@media (min-width: 768px) {
  .col-sm-5 {
    width: 66.666667%;
  }
}
</style>
