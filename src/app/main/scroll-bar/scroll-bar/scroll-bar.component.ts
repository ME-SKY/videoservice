import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Host, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {from, fromEvent, of, timer} from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('700ms ease-in-out')),
      transition('hide => show', animate('200ms ease-in-out')),
    ])
  ],
})
export class ScrollBarComponent implements OnInit, AfterViewInit {


  @Input() scrollBarWidth!: number;

  info: any = {};

  @ViewChild('bar') bar: ElementRef;
  @ViewChild('horizontal') horizontal: ElementRef;

  isScrolled = false;
  mouseOverTrumb = false;
  horizontalThumbActive = false ;
  scrollBarDragged = false;
  horizontalThumbDragOffset: number;


  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  // @ts-ignore
  horizontalScrollInPercents(scrollLeft, scrollWidth, clientWidth){
    this.info.percentsScroll = scrollLeft / (scrollWidth - clientWidth);
  }

  mouseOverToggle(isOver: boolean){
    this.mouseOverTrumb = isOver;
  }

  // (wheel)="wheeled()" on #bar
  wheeled(){
    console.log(this.info.horizontalPosition);

    // let delta = this.info.horizontalPosition -
    if(this.info.horizontalPosition == 0 || this.info.horizontalPosition == 100 || this.info.horizontalPosition == undefined){
      this.horizontalThumbActive = true;
      this.isScrolled = true;

      timer(300).pipe(
      ).subscribe(x => {
        this.isScrolled = false;
        this.horizontalThumbActive = false;
      });
    }
  }


  ngAfterViewInit() {
    const { clientWidth, scrollWidth } = this.bar.nativeElement;

    // this.bar.nativeElement.onscroll = function(){
      // console.log('scrolled in function listener');
    // }
    this.info.horizontalSize = Math.ceil(clientWidth / scrollWidth * 100);
    this.cdref.detectChanges();
  }

  horizontalScrolledF(){
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.bar.nativeElement;

    this.info.horizontalScrolled = scrollLeft / (scrollWidth - clientWidth);
    return this.info.horizontalScrolled;
  }

  horizontalSizeF(): number {
    const { clientWidth, scrollWidth } = this.bar.nativeElement;

    this.info.horizontalSize = Math.ceil(clientWidth / scrollWidth * 100);
    return Math.ceil(clientWidth / scrollWidth * 100);
  }

  // Thumb position from the left in percents
  horizontalPositionF(): number {
    this.info.horizontalPosition = this.horizontalScrolledF() * (100 - this.horizontalSizeF());
    return this.horizontalScrolledF() * (100 - this.horizontalSizeF());
  }

  // Content overflown, we see thumb
  hasHorizontalBarF(): boolean {
    this.info.hasHorizontalBar = this.horizontalSizeF() < 100;
    return this.horizontalSizeF() < 100;
  }



  // tslint:disable-next-line:typedef
  setScrollInfo(event: any) {

    this.horizontalThumbActive = true;
    this.isScrolled = true;

    timer(300).pipe(
    ).subscribe(x => {
      this.isScrolled = false;
      this.horizontalThumbActive = false;
    });

    this.horizontalScrolledF();
    this.horizontalSizeF();
    this.horizontalPositionF();
    this.hasHorizontalBarF();

    this.horizontalScrollInPercents(event.target.scrollLeft, event.target.scrollWidth, event.target.clientWidth)


    this.info.clientX = event.clientX;
    // @ts-ignore
    this.info.targetScrollLeft = event.target.scrollLeft;

  }

  @HostListener('document:mouseup')
  // tslint:disable-next-line:typedef
  onDragEnd() {
    this.horizontalThumbActive = false;
    this.scrollBarDragged = false;
  }

  // tslint:disable-next-line:typedef
  onHorizontalStart(event: MouseEvent) {
    this.scrollBarDragged = true;
    event.preventDefault();

    const { target, clientX } = event;
    // @ts-ignore
    const { left, width } = target.getBoundingClientRect();

    this.horizontalThumbDragOffset = (clientX - left) / width;
    this.horizontalThumbActive = true;
  }

  onHorizontalMove(
    { clientX }: MouseEvent,
    { offsetWidth }: HTMLElement,
    target: any
  ) {

    if (!this.horizontalThumbActive && !this.scrollBarDragged) {
      return;
    }

    const { nativeElement } = this.bar;
    const { left, width } = nativeElement.getBoundingClientRect();
    const maxScrollLeft = nativeElement.scrollWidth - width;
    const scrolled =
      (clientX - left - offsetWidth * this.horizontalThumbDragOffset) /
      (width - offsetWidth);

    nativeElement.scrollLeft = maxScrollLeft * scrolled;
  }
}
