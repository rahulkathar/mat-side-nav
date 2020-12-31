import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();
  constructor(private  router: Router) { }

  ngOnInit() {
  }
  onSave() {
    this.cancel.emit();
    console.log('save')
  }

  onCancel() {
    this.router.navigateByUrl('/tasks');
    // this.cancel.emit();
    console.log('cancel')
  }

}
