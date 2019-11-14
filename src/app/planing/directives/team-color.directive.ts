import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTeamColor]'
})
export class TeamColorDirective implements OnInit {
  @Input('appTeamColor') color: string;
  @Input() highlightColor: string;


  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.color || 'yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
