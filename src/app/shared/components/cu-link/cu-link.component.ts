import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cu-link',
  standalone: true,
  imports: [],
  templateUrl: './cu-link.component.html',
  styleUrl: './cu-link.component.scss'
})
export class CuLinkComponent {
  @Input() link!: string;
  @Output() onClickEmitter: EventEmitter<void> = new EventEmitter<void>();

  onClick(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.onClickEmitter.emit();
  }
}
