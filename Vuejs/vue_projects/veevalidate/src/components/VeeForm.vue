<template>
  <div id="app" class="mt-5">
    <Form @submit="onSubmit">
      <div>
        <Field name="email" type="email" :rules="validateEmail" placeholder="enter email"/>
      </div>
      <div>
        <ErrorMessage name="email" class="errmsg" />
      </div>

      <div>
        <Field name="password" type="text" :rules="validatePassword" placeholder="enter password"/>
      </div>
      <div>
        <ErrorMessage name="password" class="errmsg" />
      </div>

      
      <button>Sign up</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log("submit value", values);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },

    //validate password


    validatePassword(value) {
      if(value) {
        let passRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(passRegex.test(value)) {
          return true;
        } else {
          return "* enter valid password, minimum 8 characters";

        }
      } else {
        return "*password is required";
      }
    }
  },
};
</script>

<style scoped>
.errmsg {
  color: red;
}
</style>