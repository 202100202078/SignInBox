<template>
  <el-card class="box-card">
    <div class="header">
      <h3 style="font-size: 26px; color: rgba(0, 0, 0, 0.88)">
        欢迎使用 API-BOX 接口开放平台🎉
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
            🏁 无论您是用户还是开发者，API-BOX
            接口开放平台都致力于提供稳定、安全、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验。
          </h5>
        </strong>
      </span>
    </div>
    <div class="bottom">
      <el-card shadow="always">
        <div class="title">
          <span class="iconfont icon-1_square_solid"></span>
          <div class="msg">
            <h5>多样化的接口选择</h5>
          </div>
        </div>
        <div class="content">
          <span>
            <strong
              >平台上提供丰富多样的接口供您选择，涵盖了各个领域的功能和服务，满足不同需求。</strong
            >
          </span>
        </div>
      </el-card>
      <el-card shadow="always">
        <div class="title">
          <span class="iconfont icon-2_square_solid"></span>
          <div class="msg">
            <h5>在线调试功能</h5>
          </div>
        </div>
        <div class="content">
          <span>
            <strong
              >您可以在平台上进行接口在线调试，快速验证接口的功能和效果，节省了开发调试的时间和工作量。
            </strong>
          </span>
        </div>
      </el-card>
      <el-card shadow="always">
        <div class="title">
          <span class="iconfont icon-3_square_solid"></span>
          <div class="msg">
            <h5>客户端SDK支持</h5>
          </div>
        </div>
        <div class="content">
          <span>
            <strong
              >为了方便开发者集成接口到自己的代码中，平台提供了客户端SDK，使调用接口变得更加简单和便捷。
            </strong>
          </span>
        </div>
      </el-card>
      <el-card shadow="always">
        <div class="title">
          <span class="iconfont icon-4_square_solid"></span>
          <div class="msg">
            <h5>开发者文档和技术支持</h5>
          </div>
        </div>
        <div class="content">
          <span>
            <strong
              >平台提供了详细的开发者文档和技术支持，帮助开发者快速接入和发布接口，解决遇到的问题和困难。
            </strong>
          </span>
        </div>
      </el-card>
      <el-card shadow="always">
        <div class="title">
          <span class="iconfont icon-5_square_solid"></span>
          <div class="msg">
            <h5>稳定和安全</h5>
          </div>
        </div>
        <div class="content">
          <span>
            <strong
              >平台致力于提供稳定和安全的接口调用服务，采用了安全措施和技术手段，保障用户数据的安全性和隐私保护。
            </strong>
          </span>
        </div>
      </el-card>
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 16px;
    .el-card {
      height: 226px;
      background-color: rgb(255, 255, 255);
      border-radius: 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
      // padding: 16px 19px;
      width: 220px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        .iconfont {
          font-size: 32px;
          color: #1677ff;
        }
        .msg {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.88);
        }
      }
      .content {
        margin-top: 26px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.88);
        text-align: justify;
        line-height: 22px;
      }
    }
  }
}
</style>
