<script>
export default {
    data(){
        return{
            fam_list:[
                {
                    text: "Vue",
                    img: "vue",
                    length: 80,
                    blue: true
                },
                {
                    text: "Nuxt",
                    img: "nuxt",
                    length: 80,
                    blue: true
                },
                {
                    text: "Bootstrap5",
                    img: "boot",
                    length: 70,
                    blue: false
                },
                {
                    text: "CSS3",
                    img: "css",
                    length: 80,
                    blue: true
                },
                {
                    text: "Javascript",
                    img: "js",
                    length: 80,
                    blue: true
                },
                {
                    text: "Gsap",
                    img: "gsap",
                    length: 50,
                    blue: false
                },
                {
                    text: "Git",
                    img: "git",
                    length: 50,
                    blue: false
                },
            ]
        }
    },
    methods:{
        toggleModal(){
            this.$emit("toggleModal", false)
        }
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>