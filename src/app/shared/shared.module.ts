import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [
    LoggingService
  ]
})
export class SharedModule {}
