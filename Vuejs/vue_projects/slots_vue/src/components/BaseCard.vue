<template>
    
  <div>
<slot ></slot>

<body class ="body1">
    <slot name="personal"></slot>
</body>

<body class ="body2">
    <slot name="personal1"></slot>
</body>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div{

box-shadow: 0 3px 9px rgba(0,0,0,0.3) ;
border-radius: 10px;
max-width:30rem;
background-color:rgb(12, 144, 245);
color:rgb(0, 8, 11)
}
.body1{
    background-color: rgb(232, 55, 55);
    color: rgb(29, 32, 30);
    max-width:20rem;
    border-radius: 100px;
}

.body2{
    background-color: rgb(73, 20, 156);
    color: rgb(35, 187, 86);
    max-width:30rem;
    border-radius: 10px;
}


</style>