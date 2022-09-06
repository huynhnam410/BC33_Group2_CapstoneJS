function kiemTraRong(value, selectorError, name) {
    if (value.trim() === "") {
        document.querySelector(selectorError).innerHTML =
            name + ' không được bỏ trống';
        // alert("'name + ' không được bỏ trống");

        return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
}

function kiemTraKyTu(value, selectorError, name) {
    var regex =
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).innerHTML =
        name + " tất cả phải là ký tự";
    return false;
}

function kiemTraSo(value, selectorError, name) {
    var regex = /^[0-9]+$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + " tất cả phải là số";
    return false;
}

function kiemTraEmail(value, selectorError, name) {
    var regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).innerHTML =
        name + " không hợp lệ! Định dạng : abc@domain.com";
    return false;
}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    if (value.length > maxLength || value.length < minLength) {
        document.querySelector(selectorError).innerHTML =
            name + " từ " + minLength + " đến " + maxLength + " ký tự !";
        return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
}

function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
    if (
        Number(value) < minValue ||
        Number(value) > maxValue ||
        value.trim() === " "
    ) {
        document.querySelector(selectorError).innerHTML =
            name + " từ " + minLength + " đến " + maxLength + " !";
        return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
}

function kiemTraMatKhau(value, selectorError, name) {
    var regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
    if (regex.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).innerHTML =
        name +
        "password phải dài từ 8-10 ký tự, và chứa ít nhất 1 viết hoa, 1 viết thường, 1 số và 1 ký tự đặc biệt";
    return false;
}

function check_pass(value1, value2, selectorError) {
    if (document.getElementById(value1).value ==
        document.getElementById(value2).value) {
        document.getElementById(selectorError).disabled = false;
    } else {
        document.getElementById(selectorError).disabled = true;
    }
}