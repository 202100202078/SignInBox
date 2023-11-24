<template>
  <el-card class="box-card">
    <div class="header">
      <h3 style="font-size: 26px; color: rgba(0, 0, 0, 0.88)">
        欢迎使用 API 接口开放平台🎉
      </h3>
    </div>
    <div
      class="main"
      style="
        font-size: 20px;
        color: rgba(0, 0, 0, 1);
        line-height: 30px;
        margin-top: 16px;
        margin-bottom: 32px;
        width: 100%;
      "
    >
      <span>
        <strong>
          <h4>
            API 接口开放平台是一个为用户和开发者提供全面API接口调用服务的平台 🛠
          </h4>
          <h5>
            😀
            作为用户您可以通过注册登录账户，获取接口调用权限，并根据自己的需求浏览和选择适合的接口。您可以在线进行接口调试，快速验证接口的功能和效果。
            <br />
            💻 作为开发者 我们提供了
            <span class="link">
              <a href="">客户端SDK</a>
            </span>
            ， 通过
            <span class="link">
              <a href="">开发者凭证</a>
            </span>
            即可将轻松集成接口到您的项目中，实现更高效的开发和调用。
            <br />
            🤝 您可以将自己的接口接入到Qi-API
            接口开放平台平台上，并发布给其他用户使用。
            您可以管理和各个接口，以便更好地分析和优化接口性能。
            <br />
            👌 我们还提供了
            <span class="link">
              <a href="">开发者在线文档</a>
            </span>
            和技术支持，帮助您快速接入和发布接口。
            <br />
            🏁 无论您是用户还是开发者，Qi-API
            接口开放平台都致力于提供稳定、安全、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验。
          </h5>
        </strong>
      </span>
    </div>
    <div class="bottom">
      <el-card shadow="always">
        <div class="title">
          <div class="icon">1</div>
          <div class="msg">
            <h5>11111111111</h5>
          </div>
        </div>
        <div class="content"></div
      ></el-card>
      <el-card shadow="always">
        <div class="title">
          <div class="icon">1</div>
          <div class="msg">
            <h5>11111111111</h5>
          </div>
        </div>
        <div class="content"></div
      ></el-card>
      <el-card shadow="always">
        <div class="title">
          <div class="icon">1</div>
          <div class="msg">
            <h5>11111111111</h5>
          </div>
        </div>
        <div class="content"></div
      ></el-card>
      <el-card shadow="always">
        <div class="title">
          <div class="icon">1</div>
          <div class="msg">
            <h5>11111111111</h5>
          </div>
        </div>
        <div class="content"></div
      ></el-card>
      <el-card shadow="always">
        <div class="title">
          <div class="icon">1</div>
          <div class="msg">
            <h5>11111111111</h5>
          </div>
        </div>
        <div class="content"></div
      ></el-card>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  width: 1240px;
  height: 552px;
  // .el-card__body {
  //   height: 100%;
  // }
  .main {
    .link {
      font-size: 16px;
      font-weight: 800;
      line-height: 30px;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      a {
        color: hsl(215, 100%, 54%);
        transition: color 0.3s;
        &:hover {
          color: hsl(215, 100%, 70%);
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    .el-card {
      height: 226px;
      background-color: rgb(255, 255, 255);
      border-radius: 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
      padding: 16px 19px;
      min-width: 220px;
      .title {
        display: flex;
        align-items: center;
        gap: 4px;
        .icon {
          width: 48px;
          height: 48px;
          line-height: 22px;
          background-size: 100%;
          text-align: center;
          padding: 8px 16px 16px 12px;
          color: rgb(255, 255, 255);
          font-weight: bold;
          background-image: url('@/assets/avg/1_square_solid_数字1_by_climei.svg');
        }
      }
    }
  }
}
</style>
