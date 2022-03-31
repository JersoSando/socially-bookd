export const validateLogin = (loginObj, rePassword) => {
    return loginObj.firstName && loginObj.lastName && loginObj.email.includes('@') && loginObj.password && (loginObj.password === rePassword) ? loginObj : false
}

// export const getDate = () => {
//     let date = new Date();

//     let month = date.getMonth() + 1;
//     month = month < 10 ? `0${month}` : month; 
//     let day = date.getDate();
//     let year = date.getFullYear();

//     date = `${month}/${day}/${year}`;
//     console.log( `${date}` );
//     return `${date}`;
// }