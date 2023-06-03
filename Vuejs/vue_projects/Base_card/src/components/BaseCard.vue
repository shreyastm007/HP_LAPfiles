<template>
    <div class="mobileCard">
      <h2> Mobile Name: {{ mobileName }}</h2>
      <p> Ratings:{{ rating }}</p>
      <h3> Price => Rs:{{ mobilePrice }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ["mobileName", "rating", "mobilePrice"],
  };
  </script>
  
  <style>
  .mobileCard {
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 10px;
    color: white;
    background-color: blueviolet;
    width: 30%;
  }
  </style>