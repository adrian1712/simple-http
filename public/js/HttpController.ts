namespace App {
    export class HttpController{
        static $inject = ['$http'];

        private httpService;
        public hello;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.hello = '';
        }


        public getRequest () {

            // Use the angular http service opject to
            // make a call to our server.
            this.httpService ({
                // provide the http method to use
                method: 'GET',
                // Provide the url to hit
                url: '/test'
            })
            // check for the sucses of the call
            .success ((response) => {
                console.log ('The call was complete');
                console.log ('This is the messege: ',response.message);
                this.hello = response.message;
            })
            // chack for the failre of the code.
            .error (function () {
                console.log ();
            });
        }
        public getReturn () {
            this.httpService ({
                method: 'GET',
                url: '/someroute'
            })
            .success ((response) =>{
                console.log ('the call worked');
                console.log ('is the response', response);
                console.log ('is the response massege: ', response.message);
            })
            .error (function() {
                console.log ('Failure of the call');
            })
        }

    }
}
