"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('./posts.service');
var users_service_1 = require('../users/users.service');
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.posts = [];
        this.postsLoading = true;
        this.selectedPostLoading = false;
        this.users = [];
        this.pagedPosts = [];
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getAllPosts();
        this.getUsers();
    };
    PostsComponent.prototype.getUsers = function () {
        var _this = this;
        this._usersService.getUsers().subscribe(function (res) {
            _this.users = res;
        });
    };
    PostsComponent.prototype.getAllPosts = function () {
        var _this = this;
        this._postsService.getPosts().subscribe(function (res) {
            _this.posts = res;
            _this.postsLoading = false;
            _this.pagedPosts = _this.getPostsInPage(1);
        });
    };
    PostsComponent.prototype.selectPost = function (id) {
        var _this = this;
        this.selectedPostLoading = true;
        this._postsService.getPost(id).subscribe(function (res) {
            _this.selectedPost = res;
            _this.selectedPostLoading = false;
            _this._postsService.getPostComments(id).subscribe(function (res) {
                _this.selectedPostComments = res;
            });
        });
    };
    PostsComponent.prototype.getPostsByUser = function (userId) {
        var _this = this;
        if (userId == 'all') {
            this.getAllPosts();
        }
        else {
            this.postsLoading = true;
            this.posts = [];
            this._postsService.getUserPosts(userId).subscribe(function (res) {
                _this.posts = res;
                _this.postsLoading = false;
            });
        }
    };
    PostsComponent.prototype.onPageChanged = function (page) {
        this.pagedPosts = this.getPostsInPage(page);
    };
    PostsComponent.prototype.getPostsInPage = function (page) {
        var result = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
        for (var i = startingIndex; i < endIndex; i++) {
            result.push(this.posts[i]);
        }
        return result;
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/posts/posts.component.html',
            styleUrls: ['app/posts/posts.style.css']
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map