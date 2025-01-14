<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="username" name="username"  placeholder="Username">
          <input type="password" v-model="password" name="password" placeholder="Password">
          <button @click="login" tymr="submit">Login</button>
        </form>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        username: '',
        password: '',
      };  
    },
   
    methods: {
     submitForm() {
      if (!this.valid()) {  
        alert('用户名和密码不能为空！');
      }//这个表单验证到底有啥用？？？
    },
    valid() {
      // 确保用户名和密码都不为空
      return this.username.trim().length > 0 && this.password.trim().length > 0;
    },
      login() {
        if(this.username==='admin'&&this.password==='123456'){
          this.$router.push({ name: 'Home' });  
        }else{
          alert("Wrong username or password")
        }
      }
    },
    watch:{
      username(){
        if(this.username = this.username.replace(/[^a-z0-9]/gi,'')){
          console.log('用户名:'+this.username+'规范');
        }else{
          console.log('用户名:'+this.username+'错误');
        }
      },
      password(){
        if(this.password = this.password.replace(/[^a-z0-9]/gi,'')){
          console.log('密码:'+this.password+'规范');
        }else{
          console.log('密码:'+this.password+'错误');
        }     
    },    
  },  
}
</script>