<template>
  <h1> FITNESS CENTER💪</h1>
  <img
    src="https://th.bing.com/th/id/OIP.iXVLf8F223lRKjmm2YsfpAHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    alt="image"
    height="300"
    width="500"
  />
  <Form
    @submit="handlesubmit"
    class="container-sm border border-dark mb-5 mt-5"
  >
    <div>
      <label for="name">Name</label>
      <Field
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        class="mt-2"
        v-model="name"
        :rules="validateName"
      />
      <p><ErrorMessage name="name" class="errmsg" /></p>
      <br />
    </div>

    <div>
      <label for="age">Age</label>
      <Field
        type="number"
        placeholder="Enter age"
        id="age"
        name="age"
        v-model="age"
        :rules="validateAge"
      />
      <p><ErrorMessage name="age" class="errmsg" /></p>
      <br />
    </div>



    <div>
      <label for="packageDetails">Which Package would you like to choose?</label>
      <select id="packageDetails" v-model="packageDetails">
        <option value="MuscleBuild">Muscle Build</option>
        <option value="BodyBuild">Body Build</option>
        <option value="Zumba">Zumba</option>
      </select>
      <p class="errmsg" v-if="!packageDetails"> *Required field!</p>
    </div>
<br/>
    <div>

      <label for="packageDuration">Select the duration</label>
      <select id="packageDuration" v-model="packageDuration">
        <option value="3months">3 Months</option>
        <option value="6months">6 Months</option>
        <option value="1year">1 Year</option>
        <option value="2year">2 Years</option>
      </select>
      <p class="errmsg" v-if="!packageDuration"> *Required field!</p>
    </div>




    <div>
      <h3>How did you hear about us?</h3>
      <Field
        type="checkbox"
        id="friendReference"
        name="reference"
        value="friendReference"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> Friend Reference</label><br />

      <Field
        type="checkbox"
        id="socialMedia"
        name="reference"
        value="socialMedia"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> Social Media</label><br />

      <Field
        type="checkbox"
        id="none"
        name="reference"
        value="none"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> None</label><br />
      <p>
        <ErrorMessage name="reference" class="errmsg" />
      </p>
    </div>

    <div>
      <h3>Select the package duration</h3>
      <Field
        type="radio"
        id="underWeight"
        name="weight"
        value="underWeight"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="underWeight">Under Weight</label><br />


      <Field
        type="radio"
        id="overWeight"
        name="weight"
        value="overWeight"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="overWeight">Over Weight</label><br />


      <Field
        type="radio"
        id="normal"
        name="weight"
        value="normal"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="normal">Normal</label>
      <p>
        <ErrorMessage name="weight" class="errmsg" />
      </p>
    </div>

    <div>
      <Field
        type="checkbox"
        id="agreeterms"
        name="agree"
        value="agreeterms"
        v-model="confirm"
        :rules="validateAgree"
      />
      <label for="agree">Agree to terms and conditions</label>
      <p>
        <ErrorMessage name="agree" class="errmsg" />
      </p>
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      age: "",
      packageDetails: "",
      packageDuration: "",
      reference: "",
      category: "",
      confirm: "",
    };
  },
  methods: {
    handlesubmit() {
      
      alert("Form successfully submitted");
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return "* Input required";
      }
      // if the field is not a valid email
      const nameregex = /[a-zA-Z]{2,}/;
      if (!nameregex.test(value)) {
        return " Enter a valid input";
      }
      // All is good
      return true;
    },

    //validate age
    validateAge(value) {
      if (value) {
        let ageRegex = /^\S[0-9]{0,3}$/;
        if (ageRegex.test(value)) {
          return true;
        } else {
          return "*enter the valid age";
        }
      } else {
        return "*age required";
      }
    },

    //validate reference
    validateRef(value) {
      if (value && value.length) {
        return true;
      }
      return "You must choose a reference";
    },

    //validate weight
    validateWeight(value) {
      if (value) {
        return true;
      }
      return "You must choose a body weight";
    },

    //validate agree
    validateAgree(value) {
      if (value) {
        return true;
      }
      return "You must agree the terms and conditions";
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: rgb(63, 226, 209);
  color: black;
}
.errmsg {
  color: rgb(227, 31, 38);
}
</style>