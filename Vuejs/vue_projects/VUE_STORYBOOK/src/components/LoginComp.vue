<template>
    <h2> Login Form</h2>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
</form>
  <button type="submit" class="btn btn-primary" @click="home">Submit</button>
  <h4 class="mt-2 loginText" @click="Signup"> Don't have an account! Sign up....</h4>

</template>

<script>
export default {
    methods:{
    Signup(){
        this.$router.push("/signup")
    },
    home(){
        this.$router.push("/")
    }
}

}
</script>

<style>

</style>