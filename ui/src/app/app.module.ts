import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiEndpointComponent } from './components/api-endpoint/api-endpoint.component';
import { ApiEndpointItemComponent } from './components/api-endpoint-item/api-endpoint-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { TagComponent } from './components/tag/tag.component';
import { CommonModule } from '@angular/common';
import { ConfigEditModalComponent } from './components/config-edit-modal/config-edit-modal.component';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';
import { EndpointEditModalComponent } from './components/endpoint-edit-modal/endpoint-edit-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApiEndpointComponent,
    ApiEndpointItemComponent,
    LoadingComponent,
    TagComponent,
    ConfigEditModalComponent,
    JsonEditorComponent,
    EndpointEditModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
