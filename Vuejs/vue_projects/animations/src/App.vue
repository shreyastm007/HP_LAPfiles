<template>
 <h1> Animations </h1>
 <div class="container">
  
 <div class="block" :class="{animateLeft:BlockLeft}"> </div>
  <button @click="moveLeft"> Move Left </button>
 </div>

 <div class="container">

  <Transition name="para">
<P v-if="paraVisibility"><strong> Paragraph.......This......is........Shreyas</strong></P>
</Transition>

<button @click="toglePara"> Toggle Paragraph </button>
<br/>

<Transition name="slide">
  <p v-if="show">hello</p>
</Transition>

<button @click="model"> MODEL </button>
</div>

</template>

<script>


export default {
  components:{},
  name: 'App',

  data(){
    return{
      BlockLeft:false,
paraVisibility:false,
show:false
    }
  },
  methods:{
    moveLeft(){
      this.BlockLeft=!this.BlockLeft
    },
    toglePara(){
this.paraVisibility=!this.paraVisibility
    },
    model(){
this.show=!this.show
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.animateLeft{
  /* transform: translateX(-250px); */

  animation: slide-fade 0.8s 2;
  
  animation-direction: alternate;
}
.block{
  height: 200px;
  width: 200px;
  background-color: rgb(14, 213, 137);
  margin-bottom: 20px;
  /* transition: transform 0.5s ease-in-out; */
  border-radius: 100px;
}


.para-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active{
  transition: all 0.8s ease-out;
  /* animation: para 0.5s ease-in; */
}
.para-enter-to{
  opacity: 1;
  transform: translateY(0);
}
.para-leave-from{
  opacity: 1;
  transform: translateY(0);
  
}
.para-enter-active{
  transition: all 0.5s ease-out;
  /* animation: para 0.5s ease-in; */
}
.para-enter-to{
  opacity: 0;
  transform: translateY(-40px);
}


.container{
  margin: 2rem auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button{
  color: rgb(3, 26, 68);
  padding: 18px;
  background-color: rgb(243, 78, 78);
  border-radius: 20px;
  border: none;
}

button:hover{
  color: rgb(13, 23, 21);
  padding: 10px;
  background-color: rgb(103, 173, 223);
  border-radius: 10px;
}



.slide-enter-active {
  transition: all 0.3s ease-out;
}


.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}


.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}



@keyframes slide-fade{
  0%{
    transform: translateX(0) scale(1);
  } 
  50%{
    transform: translateX(-125px) scale(1.3);
  }
  100%{
    transform: translateX(-250px) scale(1);
  }
}


/* @keyframes para{
  0%{
    transform: translateX(0) scale(1);
  } 
  50%{
    transform: translateX(-125px) scale(1.3);
  }
  100%{
    transform: translateX(-250px) scale(1);
  }
} */
</style>
