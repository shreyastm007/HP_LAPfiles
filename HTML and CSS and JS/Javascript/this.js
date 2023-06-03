//global level this refers to window object
console.log(this);
console.log(window);
console.log(this === window);

let personObj = {
  firstName: "Avi",
  lastName: "Palerya S R",
  getFullName: function () {
    console.log(this);
    return this.firstName + this.lastName;
  },
};
console.log(personObj.getFullName());
