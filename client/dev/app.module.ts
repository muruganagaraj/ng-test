import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { todoRouting } from "./todo/components/todo-route";
import { TodoService }   from "./todo/services/todo-service";
// import {ToasterModule, ToasterService} from 'angular2-toaster';


@NgModule({
    imports: [
      // angular modules
      BrowserModule,
      FormsModule,
      HttpModule,

      // plugin modules
      // ToasterModule,

      // our modules
      todoRouting
    ],
    declarations: [
      App,
      TodoCmp,
    ],
    providers: [
      TodoService,
      // ToasterService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
