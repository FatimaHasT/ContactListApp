class LoginLocator {
    constructor(page) {
        this.page = page;
        this.Email = `#email`;
        this.Password = `#password`;
        this.SubmitBtn = `#submit`;
        this.SignupBtn = `#signup`;
        this.ErrorMsg = `#error`;
    }
}


module.exports = LoginLocator;