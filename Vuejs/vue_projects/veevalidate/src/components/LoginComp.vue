<template>
  <form class="container border mt-5" @submit.prevent="handleSubmit">
    <div class="mb-3 mt-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="formData.email"
      />
      <p class="msgErr">{{ setEmailError }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="formData.password"
      />
      <p class="msgErr">{{ setPasswordError }}</p>
    </div>
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["getFormDataFromLogin"],
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      setEmailError: "",
      setPasswordError: "",
    };
  },
  methods: {
    // to validate the email
    validateEmail() {
      if (this.formData.email) {
        let emailRegex = /^\S+@\S+$/;
        if (emailRegex.test(this.formData.email)) {
          this.setEmailError = "";
          return true;
        } else {
          this.setEmailError = "* enter valid email";
        }
      } else {
        this.setEmailError = "*email is required";
      }
    },
    // validate password
    validatePassword() {
      if (this.formData.password) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(this.formData.password)) {
          this.setPasswordError = "";
          return true;
        } else {
          this.setPasswordError = "*enter valid password,minimum 8 characters";
        }
      } else {
        this.setPasswordError = "*password is required";
      }
    },
    handleSubmit() {
      // validate the data , then send the data to the backend or parent component
      this.validateEmail();
      this.validatePassword();

      if (this.validateEmail() && this.validatePassword()) {
        this.$emit("getFormDataFromLogin", this.formData);
        (this.formData = {
          email: "",
          password: "",
        }),
          alert("Form submitted successfully");
        // console.log("formData",this.formData);
      }
    },
  },
};
</script>

<style>
.msgErr{
  color: red;
  font-size: smaller;
}
</style>