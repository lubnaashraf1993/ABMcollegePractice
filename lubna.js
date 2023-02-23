
    function validation() {
      var email = document.getElementById('email').value;
      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var psw = document.getElementById('password').value;
      var psw_repeat = document.getElementById('confirmpassword').value;
      console.log(fname);
      console.log(lname);
      console.log(email);
      console.log(psw);
      console.log(psw_repeat);
      
    //Below code is for checking weather the userid is empty
      if(email== ""){
        document.getElementById('erroruserid').innerHTML = "Please enter the userid";
        document.getElementById('email').focus();
        return false;
      }
      //Below code is for checking weather the password is empty
      if(psw == ""){
        document.getElementById('erroruserid').innerHTML = "Please enter the password";
        document.getElementById('password').focus();
        return false;
      }
      if( psw_repeat == ""){
        document.getElementById('erroruserid').innerHTML = "Please confirm the password";
        document.getElementById('confirmpassword').focus();
        return false;
      }
      if(fname == ""){
        document.getElementById('erroruserid').innerHTML = "Please enter the firstname";
        document.getElementById('fname').focus();
        return false;
      }
      if(lname == ""){
        document.getElementById('erroruserid').innerHTML = "Please enter the lastname";
        document.getElementById('lname').focus();
        return false;
      }
    }
      //Below code is for checking when key is pressesd weather email textbox is empty or note.
    function fnccheckempty(){
      var psw = document.getElementById('password').value;
      var psw_repeat = document.getElementById('confirmpassword').value;
      var email = document.getElementById('email').value;
      console.log(psw);
      document.getElementById('erroruserid').innerHTML = "";
      if(validPassword(psw)==false){
        document.getElementById('erroruserid').innerHTML = "The password is incorect!";
      }
     if(psw!=psw_repeat){
           document.getElementById('erroruserid').innerHTML = "The password and the confirmed don't match please type again!";
            //document.getElementById('password').value="";
       //document.getElementById('confirmpassword').value="";
       //document.getElementById('password').focus();
     }
     if(validEmail(email)==false){
        document.getElementById('erroruserid').innerHTML = "The email is incorect!";
      }
      }
          //----------------------------------------------------------------------------------------------
          //Created By : Basant Gera
          //Created On : 2023-02-15
          //Description : This function allows to check regex for the text box named as Password which includes
          //Above function follows these conditions 8 characters length
          //2 letters in Upper Case
          //1 Special Character (!@#$&*)
          //2 numerals (0-9)
          //3 letters in Lower Case
          // Function Name : validPassword
          //Param : password (string type)
          //----------------------------------------------------------------------------------------------
    function validPassword(password) {
          var filter=/^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
      return String(password).search (filter) != -1;
    }
    function validEmail(email) {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }
    
