<template>
  <div class="sidebar">
    <div class="container">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="" />
      </div>
      <div class="sidebar-nav">
        <nav>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-computer" />
          </router-link>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-laptop" />
          </router-link>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-desktop" />
          </router-link>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-computer-mouse" />
          </router-link>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-keyboard" />
          </router-link>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-headset" />
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      selectItem: 3,
      drawer: null,
      items: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  width: 120px;
  border-right: 1px solid #778290;
  float: left;
  top: 0;
  left: 0;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      margin-top: 20px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .sidebar-nav {
      display: flex;
      nav {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 0;
        width: 100%;
        a {
          text-align: center;
          margin: 20px 0;
          font-size: 30px;
          width: 100%;
        }
      }
    }
  }
}
</style>

