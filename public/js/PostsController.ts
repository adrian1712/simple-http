namespace App {
    export class PostsController{
        static $inject = ['$http', '$state', 'PostService'];

        private httpService;
        private stateService;
        private postService

        public postList;
        public currentPost;
        public newPost;

        public title;
        public description;
        public author

        constructor (

            $http: angular.IHttpService,
            $state: angular.ui.IState,
            postService: App.PostService
        ){
            this.httpService = $http;
            // this guides the proviter
            this.stateService = $state;
            this.postService = postService;

            console.log ('- test: ', this.stateService);

            this.postList = [];
            this.newPost = {};
            this.getPostList ();

            // this.stateProviter
        }

        public getPostList () {
            console.log ('list')
            this.postService.getPostList ()
            .success ((response) => {
                this.postList = response;
            })
            .error (() => {
                console.error ('there was an error', )
            })
        }
        public getPost (id) {
            console.log ('single post')
            this.postService.getPost (id)
                .success ((response) => {
                    console.log ('this is the response', response)
                    this.postList = response;
                })
                .error (() => {
                    console.error ('errorrrrrrr')
                })
            // console.log('single')
            // this.httpService ({
            //     url:'/posts',
            //     method: 'GET',
            //     params: {
            //         id: id
            //     }
            //
            // })
            // .success ((response) => {
            //     console.log ('Test data: ', response);
            //     this.currentPost = response [0];
            // })
            // .error ((response) => {
            // });
        }
        public save () {
            console.log ('datato save: ', this.title);
            let post = {
                title: this.title,
                description: this.description,
                author: this.author
            }
            this.postService.save (post)
                .success ((response) => {
                    console.log('test data', response)
                })
                .error ((response) =>{
                })
                this.stateService.reload ()
        }
            // this.httpService({
            //     url: 'posts',
            //     method: 'POST',
            //     data: {
                    // title: this.title,
                    // description:this.description,
                    // author: this.author
            //     }
            // })
            // .success ((response) => {
            //     console.log('Test data: ', response);
                // this.stateService.reload ()
            // })
            // .error ((response) => {
            // });
        // }
        // this method is what delets from the server
        public deletePost (id) {
            console.log('deleted: ' + id)
            this.postService.deletePost (id)
            .success ((response) => {
            })
            .error ((response) => {
            })
            this.stateService.reload ()

            // this.httpService ({
            //     url: '/posts/' + id,
            //     method: 'DELETE'
            // })
            // .success ((response) => {
            //     console.log('this is deleted');
            //     console.log( 'Test data: ', response);
            //     // this refreshes the [page]
            //     this.stateService.reload ()
            // })
            // .error ((response) => {
            //     console.log()
            // })
        }
        public editPost (postId) {
            console.log ('post id: ' + postId);
            this.stateService.go ('posts-edit' ,{
                id: postId
            });
        }
    }
}
