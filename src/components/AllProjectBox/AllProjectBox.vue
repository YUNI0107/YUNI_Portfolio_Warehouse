<script>
export default {
    props:["item"],
    data(){
        return{
            text_length: 50,
            skill_num: 10,
        }
    },
    computed:{
        info_text(){
            let cut = "外國觀光客可以在熱炒店用QRcode菜單輕鬆點餐，並提供適合的分類、介紹特色食材，同時幫助店家生成客製化菜單。讓台灣熱炒成為來台必體驗美食！".slice(0,this.text_length) + "......";
            return cut;
        },
        skill_list(){
            return this.item.skill.slice(0, this.skill_num)
        }
    },
    methods:{
        textLengthChange(e){
            if(e.matches){
                this.text_length = 30;
                this.skill_num = 4;
            }else{
                this.text_length = 50;
                this.skill_num = 10;
            }
        }
    },
    mounted(){
        let mql = window.matchMedia("(max-width: 576px)");
        mql.addEventListener('change',this.textLengthChange)
        this.textLengthChange(mql);
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>