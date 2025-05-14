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


export { checkEmpty, checkMail };