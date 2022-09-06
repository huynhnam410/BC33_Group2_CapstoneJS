document.querySelector('#btnSubmit').onclick = function() {
    //Lấy thông tin input từ người dùng: tạo ra format backend yêu cầu
    var CRregister = new register();
    CRregister.name = document.querySelector('#txtName').value;
    CRregister.email = document.querySelector('#txtEmail').value;
    CRregister.password = document.querySelector('#txtPassword').value;
    CRregister.passwordConfirm = document.querySelector('#txtPassconfirm').value;
    CRregister.phone = document.querySelector('#txtPhone').value;
    CRregister.gender = document.querySelector('#txtGender').value;


    console.log('register', CRregister);

    var valid = true;
    valid &=
        kiemTraRong(CRregister.name, '#erName', "Tên") & kiemTraRong(CRregister.email, '#erEmail', "Email") & kiemTraRong(CRregister.password, '#erPassword', "Password") & kiemTraRong(CRregister.password, '#erPassconfirm', "Password confirm") & kiemTraRong(CRregister.phone, '#erPhone', "Phone");

    valid &= kiemTraKyTu(CRregister.name, '#erName', "Tên");

    valid &= kiemTraEmail(CRregister.email, '#erEmail', "Email");

    valid &= kiemTraSo(CRregister.phone, '#erPhone', "Phone");

    valid &= kiemTraMatKhau(CRregister.password, '#erPassword', "Password") & kiemTraMatKhau(CRregister.password, '#erPassconfirm', )


    // valid &= check_pass('#erPassword', '#erPassconfirm', )

    if (!valid) {
        return;
    }

    //Gọi api đưa dữ liệu về server
    var input = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        method: 'POST',
        data: CRregister,
    });

    input.then(function(result) {
        console.log(result.data);
        alert("success");

    });

    input.catch(function(error) {
        console.log(error);
    })
}