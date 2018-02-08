<template>
	<div class="dialog_wrap">
        <div class="dialog_cover"></div>
        <transition name="fade">
            <div class="dialog_content">
                <span>弹窗</span>
            </div>	
        </transition>	
	</div>	
</template>

<script>
	
</script>

<style scoped>
.fade-enter-active{
    transition: all 0.5s ease;
}

.fade-leave-active {
    /*transition: opacity .5s;*/
    transition: all 0.5s ease;
}
.fade-enter{
    /*opacity: 0;*/
    transform: translateY(-500px);
}
.fade-leave-to{
    transform: translateY(-500px);
}
.dialog_wrap{
    width: 100%;
    height: 100%;
    position: absolute;
    background: ;
    left: 0;
    top: 0;
    
}
.dialog_cover{
   /* width: 100%;
    height: 100%;
    background: orange;*/
}
.dialog_content{
    width: 50%;
    height: 300px;
    background: red;
    margin: 0 auto;
    position: absolute;
    left: 25%;
    top: 200px;
}
</style>