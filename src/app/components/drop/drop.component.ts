import { Component, HostBinding, HostListener } from '@angular/core';
import { DragService } from '../../services/drag.service';
@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent  {

  @HostBinding('style.zIndex') public zIndex = 1;

  constructor(
    private dragService: DragService,
  ) {
    this.dragService.resetZIndex.subscribe(() => {
      this.zIndex = 1;
    });
  }

  @HostListener('mousedown')
  public bringToFront(): void {
    this.dragService.resetZIndex.next();
    this.zIndex = 2;
  }
  
}
