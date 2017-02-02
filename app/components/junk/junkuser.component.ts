import { Component } from '@angular/core';
import { PostsService } from '../../services/post.service'

@Component({
    // - need to use this to have relative paths
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'junkuser.component.html',
    providers:[PostsService]
})
export class JunkuserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts:Post[]

    // this runs every time the component is rendered
    constructor(private postsService: PostsService) {
        this.name = 'John Doe';
        this.email = "john@gmail.com";
        this.address = {
            street:  "215 Golf Terrace",
            city: "Chicago",
            state: "IL"
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        // - getPosts returns an observable so you need to subscrive to it
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }

    // button
    toggleHobbies() {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }

    //
    addHobby(hobby: string) {
        this.hobbies.push(hobby)
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1)
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
