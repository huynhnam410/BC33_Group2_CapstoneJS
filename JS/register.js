document.querySelector('#btnSubmit').onclick = function() {
    //Lấy thông tin input từ người dùng: tạo ra format backend yêu cầu
    var user = new register();
    user.email = document.querySelector('#email').value;
    user.name = document.querySelector('#name').value;
    user.password = document.querySelector('#pass').value;
    user.phone = document.querySelector('#phone').value;


    if (document.querySelector('#male').checked === true) {
        user.gender = true;
    };
    if (document.querySelector('#female').checked === false) {
        user.gender = false;
    };

    function password_confirm() {

        var pass = document.querySelector('#pass').value;
        var confirm_pass = document.querySelector('#Passconfirm').value;
        if (pass !== confirm_pass) {

            document.querySelector('#erPassconfirm').innerHTML = '☒ Use same password';

        } else {

            document.querySelector('#erPassconfirm').innerHTML =
                '🗹 Password Matched';

        }
    }
    password_confirm();

    //
    console.log('register', user);
    //Gọi api đưa dữ liệu về server
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
    })

    promise.then(function(result) {
        console.log(result.data);
        alert("success");

    });

    promise.catch(function(error) {
        console.log(error);
    })
}