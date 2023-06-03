<template>
  <h1> Iam Component A</h1>
  <CompB :msg="msg" />
</template>

<script>
import CompB from './CompB.vue';
export default {
    props: ["msg"],
    components: { CompB }
}
</script>

<style>

</style>