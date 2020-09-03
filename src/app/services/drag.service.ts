import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DragService {
  public readonly resetZIndex = new Subject<void>();
}