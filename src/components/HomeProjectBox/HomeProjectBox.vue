<script>
export default {
    props:["item"],
    computed:{
        info_text(){
            let cut = "外國觀光客可以在熱炒店用QRcode菜單輕鬆點餐，並提供適合的分類、介紹特色食材，同時幫助店家生成客製化菜單。讓台灣熱炒成為來台必體驗美食！".slice(0,50) + "......";
            return cut;
        }
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>