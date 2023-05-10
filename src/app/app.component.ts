import { Component } from '@angular/core';
import * as customBuild from '../assets/ckeditor5/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
public editor = customBuild;
ckeditorContent: string = '';
}
