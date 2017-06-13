<template>
  <div id="profile-page">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden">
      <defs>
        <symbol viewBox="0 0 1024 1024" id="arrow-right" class="icon">
          <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path>
        </symbol>
        <symbol viewBox="0 0 122 122" id="avatar-default">
          <path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path>
        </symbol>
        <symbol viewBox="0 0 655 1024" id="mobile">
          <path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path>
        </symbol>
        <symbol viewBox="0 0 40 40" id="order">
          <path d="M31.5 3h-23C6 3 4 5.1 4 7.7v24.7C4 34.9 6 37 8.5 37h23c2.5 0 4.5-2.1 4.5-4.7V7.7C36 5.1 34 3 31.5 3zM11.8 28.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm0-6.1c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.1-.9 2.1-2 2.1zm0-6.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm5.1 11.9h13.5v-2.6H16.9v2.6zm0-6.5h13.5v-2.6H16.9v2.6zm0-6.6h13.5v-2.6H16.9v2.6z"></path>
        </symbol>
        <symbol viewBox="0 0 40 40" id="point">
          <path d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"></path>
        </symbol>
        <symbol viewBox="0 0 40 40" id="vip">
          <path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path>
          <path d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z" class="st0"></path>
          <ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse>
          <ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse>
          <ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse>
        </symbol>
        <symbol viewBox="0 0 40 40" id="download">
          <path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path>
        </symbol>
        <symbol viewBox="0 0 40 40" id="service">
          <g id="service_XMLID_1_">
            <path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path>
            <path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path>
            <path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path>
          </g>
          <path d="M0 0h40v40H0z" class="st1"></path>
        </symbol>
      </defs>
    </svg>
    <section>
      <section class="profile-number">
        <router-link to="/profile/info" class="profile-link">
          <img class="private-image" :src="imgpath" v-if="this.avatar">
          <span class="private-image" v-else>
            <svg class="private-image-svg">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
            </svg>
          </span>
  
          <div class="user-info">
            <p>{{ username }}</p>
            <p>
              <span class="user-icon">
                <svg class="icon-mobile" fill="#fff">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                </svg>
              </span>
              <span class="icon-mobile-number">{{ mobile }}</span>
            </p>
          </div>
  
          <span class="arrow">
            <svg class="arrow-svg" fill="#fff">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
  
        </router-link>
      </section>
    </section>
  
    <section class="info-data">
      <ul class="clear">
        <router-link to="/balance" tag="li" class="info-data-link">
          <span class="info-data-top">
            <b>{{ parseInt(balance).toFixed(2)}}</b>元</span>
          <span class="info-data-bottom">我的余额</span>
        </router-link>
        <router-link to="/benefit" tag="li" class="info-data-link">
          <span class="info-data-top">
            <b>{{ count }}</b>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </router-link>
        <router-link to="/points" tag="li" class="info-data-link">
          <span class="info-data-top">
            <b>{{ pointNumber }}</b>分</span>
          <span class="info-data-bottom">我的积分</span>
        </router-link>
      </ul>
    </section>
  
    <section class="profile-members">
      <!--我的订单-->
      <router-link to="/order" class="profile-members-order">
        <aside>
          <svg fill="#4aa5f0">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
          </svg>
        </aside>
        <div class="members-order-mod">
          <span>我的订单</span>
          <span class="members-order-arrow">
            <svg fill="#bbb">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
      <!--积分商城-->
      <router-link to="/order" class="profile-members-order">
        <aside>
          <svg fill="#fc7b53">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
          </svg>
        </aside>
        <div class="members-order-mod">
          <span>积分商城</span>
          <span class="members-order-arrow">
            <svg fill="#bbb">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
      <!--饿了么会员卡-->
      <router-link to="/vipcard" class="profile-members-order">
        <aside>
          <svg fill="#ffc636">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip"></use>
          </svg>
        </aside>
        <div class="members-order-mod">
          <span>饿了么会员卡</span>
          <span class="members-order-arrow">
            <svg fill="#bbb">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
    </section>
  
    <section class="profile-members">
      <!--我的订单-->
      <router-link to="/service" class="profile-members-order">
        <aside>
          <svg fill="#4aa5f0">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
          </svg>
        </aside>
        <div class="members-order-mod">
          <span>服务中心</span>
          <span class="members-order-arrow">
            <svg fill="#bbb">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
      <!--积分商城-->
      <router-link to="/download" class="profile-members-order">
        <aside>
          <svg fill="#3cabff">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
          </svg>
        </aside>
        <div class="members-order-mod">
          <span>下载饿了么APP</span>
          <span class="members-order-arrow">
            <svg fill="#bbb">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import FootGuide from '../../components/footer/footGuide'
export default {
  data() {
    return {
      avatar: '',     //头像地址
      username: '登录/注册',    //用户名
      mobile: '暂无绑定手机号',   //电话号码
      balance: 0.00,    //我的余额
      count: 0,         //优惠券个数
      pointNumber: 0    //头像地址

    }
  },
  components: {
    FootGuide
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
#profile-page {
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.profile-number {
  padding-top: 1.95rem;
  .profile-link {
    display: block;
    display: flex;
    background: $blue;
    padding: .666667rem .6rem;
    .private-image {
      display: inline-block;
      @include wh(2.5rem, 2.5rem);
      border-radius: 50%;
      .private-image-svg {
        background: $fc;
        border-radius: 50%;
        @include wh(2.5rem, 2.5rem);
      }
    }

    .user-info {
      margin-left: .48rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      p {
        font-weight: 700;
        @include sc(.8rem, $fc);
        .user-icon {
          display: inline-block;
          @include wh(.5rem, .75rem);
          line-height: .75rem;
          .icon-mobile {
            @include wh(100%, 100%)
          }
        }
        .icon-mobile-number {
          display: inline-block;
          @include sc(.57333rem, $fc);
          padding-left: .2rem;
        }
      }

      p:nth-child(2) {
        display: flex;
        padding-top: .2rem;
      }
    }

    .arrow {
      @include wh(.46667rem, .98rem);
      display: inline-block;
      align-self: center;
      svg {
        @include wh(100%, 100%);
      }
    }
  }
}
















/*余额，优惠卷，积分*/

.info-data {
  // width: 100%;
  background: $fc;
  ul {
    display: flex;
    .info-data-link {
      border-right: 1px solid #f1f1f1;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      .info-data-top {
        @include sc(.55rem, #333);
        padding: .853333rem 0 .453333rem 0;
        b {
          @include sc(1.2rem, #f90);
          font-weight: 700;
          line-height: 1rem;
          font-family: Helvetica Neue, Tahoma;
        }
      }
      .info-data-bottom {
        @include sc(.57333rem, #666);
        font-weight: 400;
        padding-bottom: .453333rem;
      }
    }

    .info-data-link:nth-child(2) {
      b {
        color: #ff5f3e;
      }
    }

    .info-data-link:nth-child(3) {
      border-right: 0;
      b {
        color: #6ac20b;
      }
    }
  }
}

// 订单，积分，会员卡
.profile-members {
  margin-top: .4rem;
  background: #fff;
  .profile-members-order {
    display: flex;
    aside {
      flex: 0 1 1.6rem;
      margin-top: 0.185rem;
      @include wh(.7rem, .7rem);
      svg {
        @include wh(100%, 100%);
      }
    }
    .members-order-mod {
      flex: 1;
      @include sc(.7rem, #333);
      padding: .433333rem .266667rem .433333rem 0;
      display: flex;
      justify-content: space-between;
      span {
        display: block;
      }
      .members-order-arrow {
        @include wh(.46667rem, .46667rem);
        svg {
          @include wh(100%, 100%);
        }
      }
    }
  }
}
</style>


