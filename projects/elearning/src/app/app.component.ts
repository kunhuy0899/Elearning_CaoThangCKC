import { Component, OnInit } from '@angular/core';
import { setCookie, getCookie } from '../../../common/helper';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'elearning';
  tenTaiKhoan:any

  email: string = '';
  quyenGV:string="";
  quyenHS:string="";
  doiTuong:any;
  constructor(private cookie: CookieService, private toastr:ToastrService){
  }
  ngOnInit(): void {
    this.tenTaiKhoan = getCookie('name');
    this.quyenXemDiem();
  }

  quyenXemDiem()
  {
    this.doiTuong = this.cookie.get("role");
    if(this.doiTuong== 'SV')
    {
      this.quyenGV='none'
      this.quyenHS='';
    }
    else{
      this.quyenHS='none';
      this.quyenGV=''
    }
  }
}
