namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;
        public post;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;
            console.log ('Passed parameters: ', this.stateService.params.id);
            this.httpService ({
                url: '/posts/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response) => {
                console.log ('***HERE',response);
                this.post = response;
            })
            .error (() => {

            })
        }
        public editPost () {
            console.log ('save: ', this.post.title);
            // save the deta service to server
            this.httpService({
                url: '/posts/'+ this.stateService.params.id,
                method: 'PUT',
                data: {
                    title: this.post.title,
                    description:this.post.description,
                    author: this.post.author
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
                this.stateService.go ('posts')
            })
            .error ((response) => {

            });
        }
        //
    }
}
