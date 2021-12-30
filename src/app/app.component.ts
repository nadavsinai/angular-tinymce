import { Component } from '@angular/core';
import tinymce from 'tinymce';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //tinymce.PluginManager//
  title = 'angular-tinymce';
  tinyOptions ={
    height: 500,
    base_url: '/tinymce', // Root for resources
    suffix: '.min' ,       // Suffix to use when loading resources
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };
}
