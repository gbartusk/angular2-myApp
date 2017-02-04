import {Injectable} from '@angular/core'; // inject service as dependency
import {Http} from '@angular/http';  //
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http) {
        //console.log('PostService initialized...')
    }

    // - this is used in the UserComponent to grab some random posts
    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    // - this should really be in a totally separe service! just in now for testing
    getKonsilaGreeting() {
        return this.http.get('http://localhost:8080/konsila/services/Rest/greetings')
            .map(res => res.json());
    }
}
