<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial","Helvetica", "微軟正黑體", "Noto Sans TC", sans-serif;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

p {
  font-size: 14px;
   font-family: "Noto Sans TC", sans-serif;
}

.mobile {
  display: none;
}

.mobile_none {
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .mobile {
    display: block;
  }

  .mobile_none {
    display: none;
  }
}
</style>
