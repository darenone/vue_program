<template>
  <transition name="drop">
	<div class="dialog_wrap">
    <!-- <div class="dialog_cover" v-if="switchShow" @click="close"></div> -->
    <!-- <transition name="drop"> -->
      <div class="dialog_content" v-if="switchShow">
          <p class="dialog_close"><span style="width:96%;"></span><a href="javascript:;" @click="close(switchShow)">X</a></p>
          <slot>empty</slot>
      </div>	
    <!-- </transition>	 -->
	</div>	
  </transition>
</template>

<script>
export default {
  props: {
    switchShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close (obj) {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
.dialog_wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    background: ;
    left: 0;
    top: 0; 
}
.dialog_cover{
    background: #9694907a;
    width: 100%;
    height: 100%;
    z-index: 5;
    top: 0;
    left: 0;
}
.dialog_content{
    width: 50%;
    height: 300px;
    background: white;
    margin: 0 auto;
    position: fixed;
    left: 25%;
    top: 200px;
    z-index: 10;
}
.dialog_close{
    height: 10%;
    font-size: 18px;
    display: flex;
    justify-content: right!important;
    align-items: center;
    width: 100%;
}
</style>