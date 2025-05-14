//驗證資料是否為空字串
const checkEmpty = (item) => {
    const data = item.trim();
    let isValid = true;
    if (data === '' || data.length === 0) {
        isValid = false;
    }
    return isValid;
}

//傳入一個電子郵件到一個function
//驗證email格式是否正確

const checkMail = (email) => {
    //檢查 @、. 不能是-1
    // @、. 回傳 index 不可以是 0 ，email.length-1
    //email格式正確回傳true，否則回傳false
    // console.log(email.indexOf('@'));
    let isValid = true;
    const idx = email.indexOf('@');
    const idx1 = email.indexOf('.');
    if (idx === -1 || idx === 0 || idx === email.length - 1) {
        isValid = false;
    } else if (idx1 === -1 || idx1 === 0 || idx1 === email.length - 1) {
        isValid = false;
    }

    return isValid;
}

const checkMailByRegExp = email => {
    let isValid = true;
    const re = /^.+@.+\..{2,3}$/;
    if (!re.test(email)) {
        isValid = false;
    }
    return isValid;

}


//身分證的格式檢查a 1 23456789
const chkPersonId = id => {
    let isValid = true;
    const re = /^[a-z]{1}[1-2]{1}\d{8}$/;
    if (!re.test(id)) {
        isValid = false;
    }
    return isValid;
}


//手機號碼格式檢查 0911-222-333
const checkCellPhone = cell => {
    let isValid = true;
    const re = /^09\d{2}-\d{3}-\d{3}$/;
    if (!re.test(cell)) {
        isValid = false;
    }
    return isValid;
}

// 至少 8 個字元
// 至少有以下四個內容的其中三個
// 小寫字母
// 大寫字母
// 數字
// 特殊符號
const checkPassword = pwd => {
    let isValid = true;
    const re = /^((?=.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*|(?=.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!\u0022#$%&'()*+,./:;<=>?@[\]\^_`{|}~-]).*)/;
    if (!re.test(pwd)) {
        isValid = false;
    }
    return isValid

}

export { checkEmpty, checkMail, chkPersonId, checkCellPhone, checkMailByRegExp, checkPassword };