
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountClientService } from '../../account-service/account-client-service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private http: AccountClientService) {

  }

  accountname: string = '';
  email: string = '';
  password: string = '';

  save() {
    let bodyData = {
      "accountname": this.accountname,
      "email": this.email,
      "password": this.password,
    };
    this.http.postAccountApi("http://localhost:8080/api/v1/account/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => { // 修正語法錯誤
      console.log(resultData);
      alert("使用者註冊成功！");
    });

  }

}
