namespace App {
    export class HomeController {
        static $inject = ['$http', 'PostService'];

        private httpService;
        private postService;

        public postList;

        public title;



        constructor ($http: angular.IHttpService, postService: App.PostService) {
            this.httpService = $http;
            this.postService = postService;
            console.log ("this is post service", this.postService);


            this.postService.getPostList ()
                .success ((response) => {
                    console.info ( 'This is the response', response);
                    this.postList = response
                })
                .error ((response) => {
                    console.error ('there was an error', response)
                })
        }
    }
}
