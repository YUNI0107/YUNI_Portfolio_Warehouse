<template>
  <div id="app">
    <Nav/>
    <transition name="fadepage" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav/Nav";
export default {
  components: {
    Nav,
  },
  mounted(){
    console.log("%c YUNI's Portfolio 👩‍💻"+'%c \nHello, welcome to my Portfolio 👋'+'%c\n歡迎前往Github頁面查看作品集的原始碼\nhttps://github.com/YUNI0107/YUNI_Portfolio_Warehouse','background: #222; color: #5af5f5; padding: 5px 10px; margin-bottom: 5px;',"color:#18d7d7; margin-bottom: 5px;", "color: #222;");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", "Helvetica", "微軟正黑體", "Noto Sans TC", sans-serif;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

a {
  text-decoration: none;
  color: black;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


.fadepage-enter-active {
  transition: all 1s;
}

.fadepage-leave-active {
  transition: all 0.5s;
}

.fadepage-enter{
  transform: translateY(-20px);
  opacity: 0;
}

.fadepage-leave-to {
  transform: translateY(20px);
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
