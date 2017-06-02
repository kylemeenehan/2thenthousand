import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvas;
  ctx;

  ngAfterViewInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
}
