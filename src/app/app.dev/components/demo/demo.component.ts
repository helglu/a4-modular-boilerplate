import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppTranslateService} from "../../../app.common/services/translation.service";
import {MessagesService} from "../../../app.common/components/messages/messages.service";
import {RestService} from "../../../app.common/services/rest.service";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
})

export class DemoComponent implements OnInit {

  public localState:any;
  public modalWrapperVisible = false;
  public demoVariable = "testing value for modal";

  constructor(public route:ActivatedRoute,
              public appTranslateService:AppTranslateService,
              public messagesService:MessagesService,
              public restService:RestService) {
  }

  public ngOnInit() {

    this.route
      .data
      .subscribe((data:any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Demo` component');

  }

  modalCloseCallback() {
    console.log('modal closed');
    this.modalWrapperVisible = false;
  }

  showModalWrapper() {
    this.modalWrapperVisible = true;
  }

  private makeRestCall(endpoint:string) {
    this.restService
      .get(endpoint, [])
      .subscribe(
        (response) => {
          console.log(response)
        },
        (err) => {
          console.log(err)
        }
      );

  }


}

