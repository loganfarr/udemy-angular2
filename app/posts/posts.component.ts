import { Component, OnInit } from '@angular/core';

import { PaginationComponent } from '../pagination/pagination.component';
import { PostsService }        from './posts.service';
import { UsersService }        from '../users/users.service';

@Component({
  selector: 'posts',
  templateUrl: 'app/posts/posts.component.html',
  styleUrls: ['app/posts/posts.style.css']
})

export class PostsComponent implements OnInit {
  posts = [];
  postsLoading = true;
  selectedPost;
  selectedPostLoading = false;
  selectedPostComments;

  users = [];

  pagedPosts = [];
  pageSize = 10;

  constructor(private _postsService: PostsService, private _usersService: UsersService) {

  }

  ngOnInit() {
    this.getAllPosts();
    this.getUsers();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  private getAllPosts() {
    this._postsService.getPosts().subscribe(res => {
      this.posts = res;
      this.postsLoading = false;

      this.pagedPosts = this.getPostsInPage(1);
    });
  }

  selectPost(id) {
    this.selectedPostLoading = true;
    this._postsService.getPost(id).subscribe(res => {
      this.selectedPost = res;
      this.selectedPostLoading = false;

      this._postsService.getPostComments(id).subscribe(res => {
        this.selectedPostComments = res;
      });
    });
  }

  getPostsByUser(userId) {
    if(userId == 'all') {
      this.getAllPosts();
    }
    else {
      this.postsLoading = true;
      this.posts = [];

      this._postsService.getUserPosts(userId).subscribe(res => {
        this.posts = res;
        this.postsLoading = false;
      });
    }
  }

  onPageChanged(page) {
    this.pagedPosts = this.getPostsInPage(page);
  }

  private getPostsInPage(page) {
    var result = [];

    var startingIndex = (page - 1) * this.pageSize;
    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    for(var i = startingIndex; i < endIndex; i ++) {
      result.push(this.posts[i]);
    }

    return result;
  }
}