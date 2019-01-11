<template>
<div v-if="showHide" class="wrap" >
    <div class="header_book">
        <img src="./assets/notepad.png" alt="" class="header-notepad-logo">
        <h1>Bookmarks</h1>
        <button class="close"> &#x2716; </button>
    </div>
    
    <div class="book">


        <div class="inputs">
            <p>Title</p>
            <input type="text" class="user_title" placeholder="Enter bookmark title" v-model="title">
            <input class="add" type="button" value="Add" @click="addBookmark">
            
            <p class="textCap">Text</p>
            <textarea class="user_text" placeholder="Enter your bookmark" v-model="text" cols="30" rows="10"></textarea>
            
            
        </div>
        
        
        <div class="bookmark_wrap">
            
            <div v-for="(post, n) in posts" :key="post" class="bookmark">
                <div class="title">
                    <p class="title_content">
                        {{post.title}}
                    </p>
                    <button class="remove" @click="removeBookmark(n)"> 	&#x2716; </button>
                </div>

                <div class="text">
                    <p class="text_content">
                        {{post.text}}
                    </p>
                    
                </div>
            </div>
            
        </div>
        
        

    </div>
</div>
    
</template>

<script>

export default {
   props:{
       "show-hide": Boolean
   }, 
   data () {
    return {
      title:'', 
      text:'',  
      time: '',
      posts:[],
      show: true
    }
  } ,
  methods:{
      addBookmark: function() {

          if(this.text != ''){
            let tempObj = {'title':this.title , 'text':this.text, 'time':this.time}  
            this.time=Date()
            this.posts.push(tempObj)
            this.title = ''
            this.text = ''
            
            //Add to localStorage
            this.saveBookmarks() 
          } else {
              this.text = "Пожалуйста, введите текст заметки"
          }

          
      },
      removeBookmark(n){
        this.posts.splice(n, 1);
        this.saveBookmarks();
      },
      update(){
            //Get from localStorage
            let parsed = JSON.parse(localStorage.getItem('posts'))
            let tempObj = {'title':parsed.title , 'text':parsed.text}  
            this.posts = ( parsed )       
      },
      saveBookmarks() {
        const parsed = JSON.stringify(this.posts);
        localStorage.setItem('posts', parsed);
      }   
  },
  beforeMount(){
      this.update()
  }
}
</script>


<style>

*{  
    
    font-family: "Courier New";
    padding: 0;
    margin: 0;
    outline: none;
    
}



body{
    background-color: #017C7B;
}

.wrap{
    background-color: #C7C3C6;
    padding: 10px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 600px;
    border: 2px outset #EBE9ED;
}

.header_book{
    position: relative;
    height: 20px;
    margin: -2px -8px auto -8px;
    background-color: #190080;
    margin-bottom: 20px;

}
.header_book h1{

    background-color: #190080;
    line-height: 20px;
    font-family: sans-serif ;
    font-weight: 100;
    color: white;
    font-size: 15px;
    margin-top: -8px;
    margin-left: 20px;
}
.header-notepad-logo{
    position: absolute;
    left: 2px;
    top: 3px;
    width: 17px;
    height: 15px;
}

.close{
    background-color: #C7C3C6;
    position: absolute;
    right: 2.5px;
    top: 2.5px;
    border: 2px outset #EBE9ED;
    color: rgb(66, 66, 66);
    text-align: center;
    line-height: 13px;
    font-size: 10px;
    width: 17px;
    height: 15px;
}
.close:active{
    border: 1px inset #EBE9ED;
}




.inputs{
    background-color: #C7C3C6;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 7fr 2fr;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
}

.inputs p {
    background-color: #C7C3C6;
    font-size: 15px;
    color: rgb(66, 66, 66);
}

.user_title{
    height: 20px;
    background-color: #C7C3C6;
    width: 395px;
    text-align: left;
    padding-left: 5px;
}

.user_text{
    background-color: #C7C3C6;
    grid-column: 2/4;
    width: 525px;
    text-align:left;
    resize: none;
    border: 2px inset #EBE9ED;
    padding-top: 5px;
    padding-left: 5px;
}

.add{
    color: rgb(66, 66, 66);
    height: 24px;
    width: 120px;
    border: 2px outset #EBE9ED;
    background-color: #C7C3C6;
    
}
.add:active{
    outline: 1px dotted black;
    border: 1px inset #EBE9ED;
}

.bookmark_wrap{
    background-color: #C7C3C6;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 9fr;
}

.bookmark{
    background-color: #C7C3C6;
    color: rgb(66, 66, 66);
    font-size: 15px;
    margin-top: 10px;
    grid-column: 2/3;
    width: 530px;
    display: grid;
    grid-template-columns: 1fr;
    border: 2px outset #EBE9ED;

}

.title{
    position: relative;
    height: 20px;
    display: grid;
    grid-template-columns: 9fr 1fr;
    background-color: #190080;
    color: white;
}
.title_content{
    line-height: 20px;
    font-size: 14px;
    background-color: #190080;
}

.text{

    font-size: 14px;
    min-height: 40px;
    padding: 5px;
    background-color: #C7C3C6;
}
.text_content{
    background-color: #C7C3C6;
}

.remove{
    position: absolute;
    top: 2.5px;
    right: 2.5px;
    background-color: #C7C3C6;
    border: 2px outset #EBE9ED;
    color: rgb(66, 66, 66);
    text-align: center;
    line-height: 13px;
    font-size: 10px;
    width: 17px;
    height: 15px;
}
.remove:active{
    border: 1px inset #EBE9ED;
}

</style>
