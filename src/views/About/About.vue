<script>
import LittleBtn from '@/components/LittleBtn/LittleBtn'
import FamModal from '@/components/FamModal/FamModal'
import AboutSwiper from '@/components/AboutSwiper/AboutSwiper'
import FooterSection from '@/components/FooterSection/FooterSection'

export default {
  data() {
    return {
      fam_modal: false,
      personality_list: ['Ambition', 'Creative', 'Enthusiasm', 'Improving'],
      skill_list: [
        { name: 'vue', text: 'Vue' },
        { name: 'nuxt', text: 'Nuxt' },
        { name: 'react', text: 'React' },
        { name: 'boot', text: 'Bootstrap5' },
        { name: 'git', text: 'Git' },
        { name: 'js', text: 'Javascript' },
        { name: 'css', text: 'CSS3 Animation' },
        { name: 'sass', text: 'Scss / Sass' },
        { name: 'gsap', text: 'Gsap' },
      ],
      com_list: [
        { name: 'uiux', text: 'UI/UX' },
        { name: 'visual', text: 'Visual Design software' },
        { name: 'ae', text: 'Motion Graphic' },
      ],
    }
  },
  methods: {
    toggleModal(tag) {
      this.fam_modal = tag
    },
  },
  computed: {
    en_show() {
      return this.$i18n.locale !== 'en'
    },
  },
  components: {
    AboutSwiper,
    FooterSection,
    LittleBtn,
    FamModal,
  },
  mounted() {
    document.title = "About Me - YUNI's PORTFOLIO"
  },
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
