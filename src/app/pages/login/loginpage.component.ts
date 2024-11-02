import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountClientService } from '../../account-service/account-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
register() {
  this.router.navigateByUrl('/register');
}

  constructor(private http: AccountClientService, private router:Router) {

  }

  username: string = '';
  password: string = '';


  login() {
    console.log(this.username);
    console.log(this.password);

    let bodyData = {
      username: this.username,
      password: this.password,
    };
    this.http.postApi("http://localhost:8080/api/v1/account/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.message == "使用者並不存在") {
        alert("使用者並不存在");
      } else if (resultData.message == "登入成功！") {
        this.router.navigateByUrl('/surveylist');
      } else {
        alert("使用者或密碼錯誤！")
      }
    })
  }
  rememberMe = false;
  onSubmit() {
    console.log('已提交', this.rememberMe);
  }
}
