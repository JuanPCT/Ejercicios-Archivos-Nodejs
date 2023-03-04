const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const password = 'Password1';
if (regex.test(password)) {
  console.log("La contraseña es segura");
} else {
  console.log("La contraseña no es segura");
}
