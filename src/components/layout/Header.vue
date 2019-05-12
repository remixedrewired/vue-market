<template>
  <div>
    <header>
      <div class="menu-toggle" id="hamburger">
        <i class="fas fa-bars"></i>
      </div>
      <div class="overlay"></div>
      <div class="container">
        <nav>
          <h1 class="brand">
            <a v-pre href="index.html">
              <pre>M<span>a</span>rket</pre>
            </a>
          </h1>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="separator"></div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
header {
  width: 100%;
  height: 100px;
  background: linear-gradient(to left, #ff2952, #ce1e3f);
  overflow: hidden;
}

.separator {
  height: 125px;
  margin-top: calc(125px * -1);
  background-image: linear-gradient(
    to bottom right,
    transparent,
    transparent 45%,
    #f3efe4 46%,
    #f3efe4
  );
  /* Using transparent for top of the gradient allows for a background image on the header. Alternatively you can just use a solid color that matches the header color. */
}
.container {
  width: 120rem;
  max-width: 90%;
  margin: 0 auto;
}

.menu-toggle {
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  color: #eeeeee;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  display: none;
}

nav {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.6rem;
}

.brand {
  font-size: 3rem;
  font-weight: 300;
  transform: translateX(-100rem);
  animation: slideIn 0.5s forwards;
}

.brand span {
  color: #eee;
}

nav ul {
  display: flex;
}

nav ul li {
  list-style: none;
  transform: translateX(100rem);
  animation: slideIn 0.5s forwards;
}

nav ul li:nth-child(1) {
  animation-delay: 0s;
}

nav ul li:nth-child(2) {
  animation-delay: 0.5s;
}

nav ul li:nth-child(3) {
  animation-delay: 1s;
}

nav ul li:nth-child(4) {
  animation-delay: 1.5s;
}

nav ul li a {
  padding: 1rem 0;
  margin: 0 3rem;
  position: relative;
  letter-spacing: 2px;
}

nav ul li a:last-child {
  margin-right: 0;
}

nav ul li a::before,
nav ul li a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ff2952;
  left: 0;
  transform: scaleX(0);
  transition: all 0.5s;
}

nav ul li a::before {
  top: 0;
  transform-origin: left;
}

nav ul li a::after {
  bottom: 0;
  transform-origin: right;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  transition: opacity 650ms;
  transform: scale(0);
  opacity: 0;
  display: none;
}

nav ul li a:hover::before,
nav ul li a:hover::after {
  transform: scaleX(1);
}

@keyframes slideIn {
  from {
  }
  to {
    transform: translateX(0);
  }
}

@media screen and (max-width: 700px) {
  .menu-toggle {
    display: block;
  }

  nav {
    padding-top: 0;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    text-align: center;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin-top: 5rem;
  }

  nav ul li a {
    margin: 0;
    font-size: 2.5rem;
  }

  .brand {
    font-size: 5rem;
  }

  .overlay.menu-open,
  nav.menu-open {
    display: flex;
    transform: scale(1);
    opacity: 1;
  }
}
</style>
