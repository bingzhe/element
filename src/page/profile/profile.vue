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
#profile-page{
  p, span {
    font-family: Helvetica Neue,Tahoma,Arial;
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

      p:nth-child(2){
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
      b{
        color: #6ac20b;
      }
    }
  }
}
</style>


