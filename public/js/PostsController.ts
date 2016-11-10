namespace App {
    export class PostsController{
        static $inject = ['$http'];
        private httpService;
        public postList;
        public currentPost;
        public newPost;
        public title;
        public description;
        public author

        constructor ($http: angular.IHttpService){
            this.httpService = $http;
            this.postList = [];
            this.newPost = {}
        }

        public getPostList () {
            console.log ('list')
            this.httpService ({
                url:'/posts',
                method: 'GET',
            })
            .success ((response) => {
                console.log('Test data: ',response);
                this.postList = response;
            })
            .error ((response) => {

            })
        }
        public getPost (id) {
            console.log('single')
            this.httpService ({
                url:'/posts',
                method: 'GET',
                params: {
                    id: id
                }

            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.currentPost = response [0];
            })
            .error ((response) => {
            });
        }
        public save (data) {
            console.log ('datato save: ', this.title);
            this.httpService({
                url: 'posts',
                method: 'POST',
                data: {
                    title: this.title,
                    description:this.description,
                    author: this.author
                }
            })
            .success ((response) => {
                console.log('Test data: ', response);
            })
            .error ((response) => {
            });
        }
    }
}
