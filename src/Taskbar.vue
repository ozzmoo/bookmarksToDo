<template>
<div class="main-window">

        <app-desk></app-desk>
        <transition name="fade">
            <app-book v-if="showHide"></app-book>
        </transition>
        
        

        <div class="wrap-task">
        <div class="taskbar">
            <div class="start">
                <div class="start-button">
                    <img class="start-img" src="./assets/winlogo.png" alt="">
                    <p class="start-text">Start</p>
                </div>
            </div>

            <div class="main">
                <div class="opened-window"  @click="isOpened">
                    <img src="./assets/notepad.png" alt="" class="notepad-logo">
                    <p>Bookmarks</p>
                </div>
            </div>

            <div class="time">
                <div class="time-area">
                    <p class="clock">{{time}}</p>
                </div>
            </div>

        </div>
    </div>
</div>
    

</template>

<script>
export default {
    data () {
        return {
            time: '',
            showHide: true
        }
    },
    methods:{
        isOpened(){
            return this.showHide = !this.showHide
        },
        realTimer(){
            let d = new Date()
            this.time = d.toLocaleTimeString()
        }
    },
    mounted() {
        this.interval = setInterval(this.realTimer, 1000)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

*{
    user-select:none;
    padding: 0;
    margin: 0;
    
}

.wrap-task{
    height: 100%;
}

.taskbar{

    border-top: 2px outset #EBE9ED;
    height: 30px;
    width: 100%;
    background-color: #C7C3C6;
    position: absolute;
    bottom: 0px;

    display: grid;
    grid-template-columns: 1fr 17fr 2fr;
}

.start{

    background-color: #C7C3C6;
}

.start-img{
    position: absolute;
    left: 8px;
    top: 7px;
    background-color: #C7C3C6;
    width: 17px;
    height: 15px;
}

.start-text{
    line-height: 22px;
    margin-right: 10px;
    text-align: right;
    font-size: 15px;
}

.start-button{
    cursor: pointer;
    background-color: #C7C3C6;
    border: 2px outset #EBE9ED;
    color: rgb(66, 66, 66);
    text-align: center;
    min-width: 60px;
    width: 90%;
    height: 22px;
    margin-top: 2px;
    margin-left: 2px;
}
.start-button:active{
    border: 2px inset #EBE9ED;
}

.main{
    background-color: #C7C3C6;
}
.opened-window{
    position: relative;
    cursor: pointer;
    width: 150px;
    height: 22px;
    margin-top: 2px;
    margin-left: 5px;
    border: 2px outset #EBE9ED;
    background-color: #C7C3C6;
}
.opened-window:active{
    border: 2px inset #EBE9ED;
}
.opened-window p{
    margin-left: 23px;
    text-align: left;
    line-height: 22px;
    font-size: 12px;
    background-color: #C7C3C6;
}

.notepad-logo{
    position: absolute;
    left: 3px;
    top: 3px;
    width: 17px;
    height: 15px;
}

.time{
    cursor: pointer;
    background-color: #C7C3C6;
}

.time-area{
    background-color: #C7C3C6;
    margin-top: 2px;
    height: 22px;
    border: 1px inset #EBE9ED;

}

.clock{
    margin-right: 10px;
    text-align: right;
    line-height: 22px;
    height: 22px;
    background-color: #C7C3C6;
    color: rgb(66, 66, 66);
}

</style>
