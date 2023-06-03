<template>
  <h1> Cute Fitness Center</h1>
  <form @submit.prevent ="handleSubmit">
    <div>
      <label for ="customerName"> Your name</label>
      <input type="text" placeholder="enter name" id="customerName"
      v-model=" name"/> 
    </div>

    <div>
      <label for ="customerAge"> Your age</label>
      <input type="text" placeholder="enter age" id="customerAge"
      v-model="age"/> 
    </div>

    <div>
      <label for ="customerPackage"> Which package you want?</label>
     <select id ="customerPackage" v-model="selectedPackage">
      <option value= "muscle"> Muscle </option>
      <option value="cross-fit"> cross-fit training</option>
      <option value ="Zumba">Zumba </option>
      </select>
    </div>

    <div>
      <label for ="customerPackageValidity"> choose validity</label>
     <select id ="customerPackageValidity" v-model="packageValidity">
      <option value= "4m"> 4 months </option>
      <option value="7m"> 7 months</option>
      <option value ="1yr">1 year</option>
      </select>
    </div>

<div>
  <h3> How did you hear about us?</h3>

<input type ="checkbox" id="friendRef" value="friendRef" 
v-model="referer"/> 
<label for="friendRef">  friend reference</label>

<input type ="checkbox" id="socialMedia" value="socialMedia"
v-model="referer"/> 
<label for="socialMedia">  social media</label>

<input type="checkbox" id="none" value="none"
v-model="referer"/> 
<label for="none"> none</label>
</div>


<div>
  <h3> which category you belong to?</h3>

<input type ="radio" id="underweight" value="underweight"
 v-model="category"/> 
<label for="underweight">  underweight</label>

<input type ="radio" id="overweight" value="overweight"
v-model="category"/> 
<label for="overweight">  overweight</label>

<input type="radio" id="normal" value="normal"
v-model="category"/> 
<label for="normal"> normal</label>
</div>

<div>
<input type ="checkbox" id="condition" v-model="confirm"/> 
<label for="condition">  agree to terms and condition</label>
</div>

<button> Submit </button>



  </form>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      age:"",
      selectedPackage:"",
      packageValidity:"",
      referer:[],
      category:null,
      confirm:false
      
    }
  },
  methods:{
    handleSubmit(){
      console.log("name",this.name)
      console.log("age",this.age)
      console.log("selectedPackage",this.selectedPackage)
      console.log("packageValidity",this.packageValidity)
      console.log("referer",this.referer)
      console.log("category",this.category)
      console.log("confirm",this.confirm)
      this.name=""
      this.age=""
      this.selectedPackage=""
      this.packageValidity=""
      this.referer=""
      this.category=""
      this.confirm=""
    }
  },
  

}
</script>

<style>

</style>