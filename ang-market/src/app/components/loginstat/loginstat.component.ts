import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-loginstat',
  templateUrl: './loginstat.component.html',
  styleUrls: ['./loginstat.component.css']
})
export class LoginstatComponent implements OnInit {

  isAuthenticated:boolean=false;
  userFullname : string | undefined;

  constructor( private _oktaauthsrvice: OktaAuthService) {

   }

  ngOnInit(): void {
    this._oktaauthsrvice.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated=result;
        this.getUserDetail();

      }
    );
  }
  getUserDetail() {
    if(this.isAuthenticated){
      this._oktaauthsrvice.getUser().then(
        (res)=>{
          this.userFullname=res.name;

        }
      );
    }
  }

  logout(){
    //end session
    this._oktaauthsrvice.signOut();
  }

}
