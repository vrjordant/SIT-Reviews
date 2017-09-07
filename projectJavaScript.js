var dictionary = {};


function login() {
    var login = document.forms[0];
    var username = login.user.value;
    var password = login.pass.value;
    console.log(username);
    console.log(password);
    console.log(dictionary);
    if (dictionary[username] == password) {
        window.alert('Welcome ' + username + "! (づ◔ ͜ʖ◔)づ)");
    }
    else {
        window.alert('Incorrect account information entered. Please make a new account or try again. ಠ_ಠ');
    }
}

function createAccount() {
    var create = document.forms[0];
    var username = create.newuser.value;
    var password = create.newpass.value;
    dictionary[username] = password;
    console.log(dictionary);
    window.alert('Your account was successfully created!');
}

function submitReview() {
    var submit_form = document.forms[0];
    var course_number = submit_form.course.value;
    var date = submit_form.date.value;
    var time = submit_form.time.value;
    var ampm = submit_form.ampm.value;
    var building = submit_form.building.value;
    
    if (building == 'other') {
        var building = submit_form.loc.value;
    }
    var room = submit_form.room.value;
    var org = submit_form.org.value;
    var host = submit_form.host.value;
    
    var result = "Course: " + course_number + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + ampm + "\n" +
        "Building: " + building + " " + room + "\n" +
        "Organization: " + org + "\n" +
        "Host: " + host;
    window.alert('Thank you for your submission. It will be reviewed and you will be notified if it is accepted or not.' + "\n" + result);
}