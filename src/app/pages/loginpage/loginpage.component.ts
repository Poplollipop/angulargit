import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  rememberMe = false;
  onSubmit() {
    // 處理登入邏輯
    console.log('表單已提交', this.rememberMe);
}
}
