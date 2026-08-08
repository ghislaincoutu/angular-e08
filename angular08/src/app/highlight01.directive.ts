import { Directive } from '@angular/core';
import { Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
    selector: '[appHighlight01]',
    standalone: false
})
export class Highlight01Directive implements OnChanges {
  @Input() searchedWord!: string;
  @Input() content!: string;
  @Input() classToApply!: string;
  @Input() setTitle:any = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }

    if (this.setTitle) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'title',
        this.content
      );
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}
