import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
