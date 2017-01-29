import { Component } from '@angular/core';
import {PostsService} from '../services/post.service'

@Component({
  selector: 'about',
  template: `
    <h1>{{pageTitle}}</h1>
    <h2>Konsila Greeting</h2>
    <!-- need to check that it doesnt render before get request that populates konsilaGretting is actually responded to -->
    <div *ngIf="konsilaGretting">
        <!--<p>{{konsilaGretting.id}}</p>-->
        <p><b>{{konsilaGretting.id}}</b> - name: <b>{{konsilaGretting.name}}</b>, msg: <b>{{konsilaGretting.msg}}</b></p>
    <div>
    `,
    providers:[PostsService]
})
export class AboutComponent  {
    pageTitle: string;
    konsilaGretting: KonsilaGreeting;

    constructor(private postsService: PostsService) {
        this.pageTitle = "About This App";

        this.postsService.getKonsilaGreeting().subscribe(konsilaGretting => {
            // http://stackoverflow.com/questions/22885995/how-do-i-initialize-a-typescript-object-with-a-json-object
            //console.log(konsilaGretting);
            this.konsilaGretting = konsilaGretting;
        })
    }
}

interface KonsilaGreeting {
    id: number;
    name: string;
    msg: string;
}
