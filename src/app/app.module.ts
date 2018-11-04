import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/cources.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { PostsService } from './services/posts.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapitalizestrwordsPipe } from './capitalizestrwords.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactformComponent } from './contactform/contactform.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicsComponent } from './topics/topics.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    CapitalizestrwordsPipe,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactformComponent,
    CreateCourseComponent,
    SignupFormComponent,
    TopicsComponent,
    ChangePasswordComponent,
    PostsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component:PostsComponent},
      {path: 'courses/:courseId', component:CourseComponent},
      {path: 'courses', component:CoursesComponent},
      {path: 'authors', component:AuthorsComponent},
      {path: 'new-course', component:CreateCourseComponent}
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostsService,
    {provide: ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
