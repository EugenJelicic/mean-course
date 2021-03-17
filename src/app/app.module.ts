import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostCreateComponent } from './posts/post-create/post.create.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
