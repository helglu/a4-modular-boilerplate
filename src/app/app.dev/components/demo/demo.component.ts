import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AClientService} from "../../../app.a/services/a.client.service";
import {AppTranslateService} from "../../../module.common/services/translation.service";
import {MessagesService} from "../../../module.common/components/messages/messages.service";
import {RestService} from "../../../module.common/services/rest.service";

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
              public restService:RestService, 
              public aClientService: AClientService) {
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

  private makeRestCall() {
    this.aClientService.hello().
    subscribe(
      (data)=>{
        this.messagesService.addMessage({type: 'info', message: data.msg})
      });
  }


}

