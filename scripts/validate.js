//傳入一個電子郵件到一個function
//驗證email格式是否正確

const checkMail = (email) => {
    //檢查 @、. 不能是-1
    // @、. 回傳 index 不可以是 0 ，email.length-1
    //email格式正確回傳true，否則回傳false
    console.log(email.indexOf('@'));
}


export { checkMail };