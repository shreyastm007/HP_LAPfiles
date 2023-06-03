let login = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;

  if (email === "" && password === "") {
    alert("please enter the values");
  } else {
    alert("log in successfull");
  }
  console.log("TEXT");
};
