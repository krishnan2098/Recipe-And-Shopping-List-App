import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  // styleUrls : ['./header.component.css']
})

export class HeaderComponent {
  // @Output() selectTab = new EventEmitter<{name: string}>();
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
