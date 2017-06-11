<template>
  <div id="profile-page">
    11111111111111111
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
      mobile: '暂无绑定手机号'   //电话号码
    }
  },
  components: {
    FootGuide
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  .profile-number{
    padding-top: 1.95rem;
    .profile-link{
      display: block;
      display: flex;
      background: $blue;
      .private-image{
        display: inline-block;
        @include wh(2.5rem, 2.5rem);
        border-radius: 50%;
        .private-image-svg{
          background: $fc;
          border-radius: 50%;
          @include wh(2.5rem, 2.5rem);
        }
      }
    }
  }
</style>


