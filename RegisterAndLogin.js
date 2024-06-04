// Functions for my ease



const getInputFieldValue = (id) => document.getElementById(id).value;


const showtoast = (msg, type) => {
  let first = "";
  let second = "";
  if (type == "error") {
    first = "black";
    second = "red";
  } else if (type == "success") {
    first = " #00b09b";
    second = "#96c93d";
  }

  Toastify({
    text: msg,
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // top or bottom
    position: "left", // left, center or right
    stopOnFocus: true, // Prevents dismissing of toast on hover

    style: {
      background: `linear-gradient(to right, ${first},${second})`,
      //   background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }, // Callback after click
  }).showToast();
};





// Register USer
let users = [];



let RegisterUser = (event) => {
  event.preventDefault();

  let email = getInputFieldValue("reg-email");
  let password = getInputFieldValue("reg-password");


  email = email.trim()
  password = password.trim()

  if (email.length <= 4) {
    showtoast("Please enter at least 5 characters in email field", "error")
    return;
  } else if (password.length <= 4) {
    showtoast("Please enter at least 5 characters in Password field", "error")
    return;
  }



  users.push({ email, password });

  localStorage.setItem("Users", JSON.stringify(users));
  console.log('Users:', users);


  document.getElementById("reg-email").value = '';
  document.getElementById("reg-password").value = '';
  showtoast("you are Successfully Register", "success")

  setInterval(() => {
    window.location.replace("./login.html");

  }, 3000);

};


// Login USer



let loginUser = () => {
  event.preventDefault()
  let users1 = localStorage.getItem("Users")
  users1 = JSON.parse(users1)

  console.log('users1', users1)


  let logemail = getInputFieldValue("log-email");
  let logpassword = getInputFieldValue("log-password");
  // console.log('logemail', logemail)
  // console.log('logpassw0rd', logpassword)

  logemail = logemail.trim()
  logpassword = logpassword.trim()

  if (logemail.length <= 4) {
    showtoast("Please enter at least 5 characters in email field", "error")
    return;
  } else if (logpassword.length <= 4) {
    showtoast("Please enter at least 5 characters in Password field", "error")
    return;
  }


  for (let i = 0; i < users1.length; i++) {
    if (users1[i].email == logemail) {
      console.log("you email ok ")

      showtoast("your Email is correct", "success")

      // alert("email")
    } else {
      showtoast("your Email is not correct", "error");
      return;
    }
    if (users1[i].password == logpassword) {
      console.log("you passward ok ")

      showtoast("Your Password is correct", "success")
      // alert("email")
    } else {
      showtoast("your Password is not correct", "error"
      ); return;
    }
  };
  setInterval(()=> {
    window.location.href= "./todo.html"
  },1000);
}

// users1.sum((e)=>)



