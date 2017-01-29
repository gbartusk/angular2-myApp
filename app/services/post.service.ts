import {Injectable} from '@angular/core'; // inject service as dependency
import {Http} from '@angular/http';  //
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http) {
        console.log('PostService initialized...')
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    getKonsilaGreeting() {
        return this.http.get('http://localhost:8080/konsila/services/Rest/greetings')
            .map(res => res.json());
    }
}
