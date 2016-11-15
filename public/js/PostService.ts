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
    }
    let app = angular. module ('App');
    app.service ('PostService', PostService);
}
