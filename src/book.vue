<template>
<div class="wrap">
    <div class="header_book">
        <h1>Bookmarks</h1>
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
                    <button class="remove" @click="removeBookmark(n)"> &#10006 </button>
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
   data () {
    return {
      title:'', 
      text:'',  
      time: '',
      posts:[]
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
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    outline: none;
}

.header_book{
    margin: -2px -8px auto -8px;
    background-color: #008284;
    margin-bottom: 20px;

}
.header_book h1{
    font-family: sans-serif ;
    padding: 2px;
    color: white;
    font-size: 15px;
    margin-top: -8px;
    margin-left: 5px;
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


.inputs{
    
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 7fr 2fr;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
}

.inputs p {
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
}

.bookmark_wrap{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 9fr;
}

.bookmark{
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
    display: grid;
    grid-template-columns: 9fr 1fr;
    padding: 5px;
    background-color: #008284;
    color: white;
}

.text{
    font-size: 14px;
    min-height: 40px;
    padding: 5px;
    background-color: #C7C3C6;

    
}
.remove{
    text-align: center;
    line-height: 15px;
    margin-right: 0px;
    margin-left: auto;
    width: 20px;
    height: 18px;
}



</style>
