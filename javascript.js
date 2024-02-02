
function ShowRegistrationForm() {
  SetTitle("Registration");
  ShowHideForm("RegistrationForm","Show");
  ShowHideForm("LoginForm","Hide");
  ShowHideForm("ForgetPasswordForm","Hide");

  ActiveInactiveBtn('ShowLoginBtn',"Inactive");
  ActiveInactiveBtn('ShowRegistrationBtn',"Active");

  ShowHideFormSwitchBtn("Show");
  
}

function ShowLoginForm() {

  SetTitle("Login");
  ShowHideForm("RegistrationForm","Hide");
  ShowHideForm("LoginForm","Show");
  ShowHideForm("ForgetPasswordForm","Hide");

  ActiveInactiveBtn('ShowLoginBtn',"Active");
  ActiveInactiveBtn('ShowRegistrationBtn',"Inactive");

  ShowHideFormSwitchBtn("Show");
  
}


function SetTitle(Title) {
  var formTitle = document.getElementById('formTitle');
  formTitle.innerHTML = Title;
}

function ShowHideFormSwitchBtn(ShowOrHide) {
  var formSwitchBtn = document.getElementById('formSwitchBtn');
  if(ShowOrHide == "Show"){
    formSwitchBtn.style.display = ""
  }else{
    formSwitchBtn.style.display = "none"
  }
  
}

function ShowForgetPasswordForm() {

  SetTitle("Forget Password");
  ShowHideForm("RegistrationForm","Hide");
  ShowHideForm("LoginForm","Hide");
  ShowHideForm("ForgetPasswordForm","Show");

  ActiveInactiveBtn('ShowLoginBtn',"Active");
  ActiveInactiveBtn('ShowRegistrationBtn',"Inactive");

  ShowHideFormSwitchBtn("Hide");
  
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
  var Button = document.getElementById(ButtonID);
  if(ActiveORInactive == "Active"){
    Button.classList.add('active');
  }else{
    Button.classList.remove('active');
  }
  
}

