<template>
    <div >
        <div class="container">
         <h1 class="title">路线规划</h1>
         <hr>
         <p class="all">路线</p>
         <router-link to ="/hardware">硬件组路线</router-link>
         <br>
         <router-link to="/software">软件组路线</router-link>

         <!-- <a class="hard">硬件组路线</a>
         <br>
         <a class="soft">软件组路线</a> -->
        </div>
         <!-- //展示区 -->
        <div class="content">
           <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup  name="App">
    import {RouterView,RouterLink} from 'vue-router'
    
</script>

<style scoped>
    .container{
        display:flex;
        justify-content: space-between; /* 使子元素在主轴上两端对齐 */
         padding: 20px; 
    }
    .title {
        margin:30px 0;
        height:70px;
        background:radial-gradient(circle, rgb(109, 69, 100),rgb(112, 37, 105),rgb(109, 69, 100));
        box-shadow: 0 0 10px;
        /* border-radius: 10px; */
        padding: 20px;
        text-align: center;
    }
    .all{
        margin:5px 0 0 3px;
        color: rgb(146, 134, 157);
        font-size: 20px;
    }
    .route{
        background-color:rgb(142, 79, 131);
        margin-top:2px;
        padding: 20px;
        /* border-radius: 10px; */
        box-shadow: 0 0 10px;
    }
    .active{
        color: rgb(255, 255, 255);
        background-color: rgb(125, 58, 118);
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
    .content{
        margin: 10px;
    }
    .hard{
        display:flex;
        flex:left;
        color: rgb(255, 255, 255);
        background-color: rgb(125, 58, 118);
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
    .soft{
        display:flex;
        flex:right;
        color: rgb(255, 255, 255);
        background-color: rgb(125, 58, 118);
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
</style>