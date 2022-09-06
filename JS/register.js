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
        if (pass != confirm_pass) {

            document.querySelector('erPassconfirm').innerHTML = '☒ Use same password';

        } else {

            document.querySelector('erPassconfirm').innerHTML =
                '🗹 Password Matched';

        }
    }
    password_confirm();

    // var valid = true;
    // valid &=
    //     kiemTraRong(CRregister.name, '#erName', "Tên") & kiemTraRong(CRregister.email, '#erEmail', "Email") & kiemTraRong(CRregister.password, '#erPassword', "Password") & kiemTraRong(CRregister.phone, '#erPhone', "Phone");

    // valid &= kiemTraKyTu(CRregister.name, '#erName', "Tên");

    // valid &= kiemTraEmail(CRregister.email, '#erEmail', "Email");
    // valid &= kiemTraMatKhau(CRregister.password, '#erPassword', "mật khẩu") & kiemTraMatKhau(CRregister.passwordConfirm, '#erPassconfirm', "mật khẩu");

    // valid &= kiemTraSo(CRregister.phone, '#erPhone', "Phone");


    // // valid &= check_pass('#erPassword', '#erPassconfirm', )

    // if (!valid) {
    //     return;
    // }

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