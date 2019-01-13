<template>
    <div class="desk_wrap">
        <div class="icons">
            <div class="note_icon" v-bind:open-app = openApp @click="isOpened">
                <img src="./assets/notepad.png" alt="" class="note_icon_img">
                <p class="note_icon_title">bookmarks</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            openApp:false
        }
  },
  methods:{
        isOpened(){
            return this.openApp = !this.openApp
        }
  }
}
</script>

<style>



.desk_wrap{
    position: fixed;
    top: 20px;
}

.note_icon{
    margin-left: 20px;
    width: 70px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    cursor: pointer;
}

.note_icon_img{
    width: 40px;
    height: 40px;
}

.note_icon_title{
    font-size: 15px;
}

</style>