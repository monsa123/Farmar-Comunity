function formdata() {
  var fullname1 = document.forms["holedata"]["FullName"];
  var emailaddress2 = document.forms["holedata"]["EmailAddress"];
  var phonenumber3 = document.forms["holedata"]["PhoneNumber"];
  var textarea4 = document.forms["holedata"]["textarea"];
  if (fullname1.value == "") {
    window.alert("Pleash Enter Your full name.");
    fullname1.focus();
    return false;
  }
  if (emailaddress2.value == "") {
    window.alert("Pleash Enter Your Email address.");
    emailaddress2.focus();
    return false;
  }
  if (phonenumber3.value == "") {
    window.alert("Pleash Enter Your Phone number.");
    phonenumber3.focus();
    return false;
  }
  if (textarea4.value == "") {
    window.alert("Pleash Enter Your Message.");
    textarea4.focus();
    return false;
  }
  return true;
}
