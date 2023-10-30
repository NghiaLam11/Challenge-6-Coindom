<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-group">
        <h4 class="footer-logo">Coindom</h4>
      </div>
      <div class="footer-group">
        <h3 class="title">Lorem isoler</h3>
        <ul class="list">
          <li class="item"><router-link to="/">Home</router-link></li>
          <li class="item"><router-link to="/">DashBoard</router-link></li>
          <li class="item"><router-link to="/">News</router-link></li>
          <li class="item"><router-link to="/">About Us</router-link></li>
        </ul>
      </div>
      <div class="footer-group">
        <h3 class="title">Lorem isoler</h3>
        <ul class="list">
          <li class="item"><router-link to="/">Home</router-link></li>
          <li class="item"><router-link to="/">DashBoard</router-link></li>
          <li class="item"><router-link to="/">News</router-link></li>
          <li class="item"><router-link to="/">About Us</router-link></li>
        </ul>
      </div>
      <div class="footer-group">
        <h3 class="title">Lorem isoler</h3>
        <ul class="list">
          <li class="item"><router-link to="/">Home</router-link></li>
          <li class="item"><router-link to="/">DashBoard</router-link></li>
          <li class="item"><router-link to="/">News</router-link></li>
          <li class="item"><router-link to="/">About Us</router-link></li>
        </ul>
      </div>
      <div class="footer-group">
        <ul class="list-contact">
          <li class="item">
            <router-link to="/"
              ><i class="fa-brands fa-square-facebook"></i
            ></router-link>
          </li>
          <li class="item">
            <router-link to="/"
              ><i class="fa-brands fa-square-instagram"></i
            ></router-link>
          </li>
          <li class="item">
            <router-link to="/"
              ><i class="fa-brands fa-square-youtube"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 2rem 0;
  background-color: #111827;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer-wrapper {
  max-width: 1254px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}
.footer-logo {
  font-family: monospace;
  font-size: 1.5rem;
}
.title {
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
}
.item {
  opacity: 0.7;
  font-size: 0.9rem;
  line-height: 1.5rem;
}
.item:hover {
  opacity: 1;
}
.list-contact {
  display: flex;
  gap: 0.3rem;
}
.list-contact .item {
  font-size: 1.7rem;
}
@media screen and (max-width: 534px) {
  .footer-wrapper{
    flex-direction: column;
  }
  .footer-group {
    margin: 0.5rem 0;
  }
}
</style>
