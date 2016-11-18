namespace App {
    export class SampleFormController{
        public fullName
        public userName
        public email

        constructor () {
            this.fullName = ""
            this.userName = ""
            this.email = ""
        }


        public saveUser (userRegister){
            console.log ("hello")
            console.log ("form object", userRegister)
            if (userRegister.$valid == false) {
                alert ("please fill out form corectly")
            }
            else {
                console.log ('submiting new user');
            }
        }

    }
}
