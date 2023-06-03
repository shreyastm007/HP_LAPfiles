<template>
  <h2>Iam Component B</h2>
  <CompC :msg="msg"/> 
</template>

<script>
    import CompC from './CompC.vue';

export default {
    props: ["msg"],
    components: {
         CompC 
        }
}
</script>

<style>

</style>