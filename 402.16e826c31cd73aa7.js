"use strict";(self.webpackChunke_learning=self.webpackChunke_learning||[]).push([[402],{9402:(y,u,s)=>{s.r(u),s.d(u,{FavoritesCoursesModule:()=>r});var g=s(6895),f=s(4539),a=s(7946),d=s(7579),p=s(2722),n=s(8256),C=s(3071),v=s(7185),_=s(8417),m=s(7003);function M(t,e){1&t&&n._UZ(0,"app-loading")}function O(t,e){1&t&&(n.TgZ(0,"h1",8),n._uU(1," No Courses In Your Favorite List "),n.qZA())}function h(t,e){1&t&&(n.TgZ(0,"a",9),n._uU(1,"Browse Courses"),n.qZA())}function x(t,e){1&t&&(n.TgZ(0,"div",10)(1,"h1",11),n._uU(2,"Favorites"),n.qZA(),n.TgZ(3,"p",12),n._uU(4,"List of your favorite courses"),n.qZA()())}function P(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"div",15)(1,"i",16),n.NdJ("click",function(){const I=n.CHM(o).$implicit,T=n.oxw(3);return n.KtG(T.deleteFromFavorites(I._id))}),n.qZA(),n._UZ(2,"app-course",17),n.qZA()}if(2&t){const o=e.$implicit;n.xp6(2),n.Q6J("course",o)}}function F(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,P,3,1,"div",14),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",o.courses)}}function b(t,e){if(1&t&&(n.TgZ(0,"div",3),n.YNc(1,O,2,0,"h1",4),n.YNc(2,h,2,0,"a",5),n.YNc(3,x,5,0,"div",6),n.YNc(4,F,2,1,"div",7),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.courses.length<1),n.xp6(1),n.Q6J("ngIf",o.courses.length<1),n.xp6(1),n.Q6J("ngIf",o.courses.length>0),n.xp6(1),n.Q6J("ngIf",o.courses.length>0)}}class c{constructor(e,o,l){this.route=e,this.userService=o,this.toast=l,this.courses=[],this.isLoading=!1,this.userSub$=new d.x,this.deleteSub$=new d.x}ngOnInit(){this.isLoading=!0,this.route.params.subscribe(e=>{this.userId=e.id,this.userService.getUser(this.userId).pipe((0,p.R)(this.userSub$)).subscribe(o=>{this.courses=o.user.favorites,this.isLoading=!1})})}deleteFromFavorites(e){this.isLoading=!0,this.userService.deleteFromFavorites(e,this.userId).pipe((0,p.R)(this.deleteSub$)).subscribe(o=>{this.toast.success(o.message,o.title),this.courses=o.courses,this.isLoading=!1})}ngOnDestroy(){this.userSub$.next(),this.userSub$.unsubscribe(),this.deleteSub$.next(),this.deleteSub$.unsubscribe()}}c.\u0275fac=function(e){return new(e||c)(n.Y36(a.gz),n.Y36(C.K),n.Y36(v._W))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-favorites-courses"]],decls:3,vars:2,consts:[[1,"favorites-page"],[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],["class","no-courses",4,"ngIf"],["class","link","routerLink","/courses",4,"ngIf"],["class","head",4,"ngIf"],["class","courses",4,"ngIf"],[1,"no-courses"],["routerLink","/courses",1,"link"],[1,"head"],[1,"title"],[1,"mini-title"],[1,"courses"],["class","course",4,"ngFor","ngForOf"],[1,"course"],[1,"fa-solid","fa-trash",3,"click"],[3,"course"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.YNc(1,M,1,0,"app-loading",1),n.YNc(2,b,5,4,"div",2),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",o.isLoading),n.xp6(1),n.Q6J("ngIf",!o.isLoading))},dependencies:[g.sg,g.O5,_.N,m.h,a.rH],styles:['.favorites-page[_ngcontent-%COMP%]{min-height:100vh;position:relative;z-index:1}.favorites-page[_ngcontent-%COMP%]:before{z-index:-1;content:"";position:fixed;inset:0;background-size:cover;background-position:center;background-image:url(assets/instructor-background.svg);opacity:.3;filter:blur(2px)}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:200px 20px 150px;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:50px}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .no-courses[_ngcontent-%COMP%]{font-size:40px;margin:0;color:#fff}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{background-color:#5009d4;padding:10px 20px;font-size:20px;text-decoration:none;color:#fff;cursor:pointer;transition:.4s}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{background-color:#3e09a0;translate:0 -5px;border-radius:20px}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{text-align:center}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:10px;font-size:35px}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%]{font-style:italic;color:#adacac}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;background-color:#bd0101;border-radius:50%;cursor:pointer;padding:10px;transition:.3s}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:#830404}@media (max-width: 768px){.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .no-courses[_ngcontent-%COMP%], .favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px}.favorites-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .mini-title[_ngcontent-%COMP%]{font-size:15px}}']});const Z=[{path:"",component:c}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[a.Bz.forChild(Z),a.Bz]});class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[g.ez,f.p,i]})}}]);