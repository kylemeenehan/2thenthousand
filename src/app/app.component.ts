import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvasElement;
  canvas;
  ctx;
  imageData;
  numberOfPixels
  initialNow = Date.now();


  ngAfterViewInit(){
    this.canvas = this.canvasElement.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);
    this.numberOfPixels = this.canvas.width * this.canvas.height;
    this.paintCanvas(this.initialNow);
  }

  paintCanvas(date: number): void{
    let binary = date.toString(2);
    let imageData = this.ctx.getImageData(0,0,this.canvas.width, this.canvas.height);
    let data = imageData.data;

    for (let i = 0; i < binary.length; i++){
      let value = binary.charAt(binary.length - i -1);
      if (value == '1'){
        console.log('true')
        data[i * 4] = 0;
        data[i * 4 + 1] = 0;
        data[i * 4 + 2] = 0;
        data[i * 4 + 3] = 255;
      } else {
        data[i * 4] = 255;
        data[i * 4 + 1] = 255;
        data[i * 4 + 2] = 255;
        data[i * 4 + 3] = 255;
      }
    }

    this.ctx.putImageData(imageData,0,0);

  }
}
