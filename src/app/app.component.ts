import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  slides = [
    {
      url: 'https://lh5.googleusercontent.com/p/AF1QipO7NdKCRtncngTOVMRX7M4tudJrDt4lAtL5jUeh=w90-h90-n-k-no'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]
}
