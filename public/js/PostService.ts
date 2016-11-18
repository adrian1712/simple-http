namespace App{
    export class PostService {
        static $inject = ['$http'];

        public httpService

        constructor ($http: angular.IHttpService)  {
           this.httpService = $http;
           this.getPostList ();
       }

       public getPostList (){
           let promise = this.httpService ({
               url: '/posts',
               method: 'GET'
           })
           return promise;
       }
       public getPost (id){
           let promise = this.httpService ({
               url:'/posts',
               method: 'GET',
               params: {
                   id: id
               }
           })
           return promise;
       }
       public save (post){
           let promise = this.httpService ({
               url: 'posts',
               method: 'POST',
               data: post
           })
           return promise;
       }
       public deletePost (id){
           let promise = this.httpService({
               url: '/posts/' + id,
               method: 'DELETE'
           })
           return promise;
       }
       public update (id, post) {
           let promise = this.httpService ({
               url: '/posts/' + id,
               method: 'PUT',
               data: post
           })

           return promise;
       }
    }
    let app = angular. module ('App');
    app.service ('PostService', PostService);
}
