<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav/Nav"
export default {
  components:{
    Nav,
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.w-100{
  width: 100%;
}

p{
  font-size: 14px;
}

</style>


