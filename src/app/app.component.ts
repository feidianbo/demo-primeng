import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-primeng';

  // 演示Dialog
  display: boolean = false;
  showDialog() {
    console.log("测试对话框是否能够正常显示")
    this.display = true;
  }
}