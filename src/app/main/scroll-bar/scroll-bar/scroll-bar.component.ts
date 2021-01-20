import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {timer} from 'rxjs';

import {animate, state, style, transition, trigger,} from '@angular/animations';

//TODO refactor this component

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


  // private defaultAxis = 'horizontal';
  @Input() scrollBarWidth!: number;
  @Input() scrollBarHeight!: number;
  @Input() axis: 'vertical' | 'horizontal' = 'horizontal';

  info: any = {};

  @ViewChild('bar') bar: ElementRef;
  @ViewChild('horizontal') horizontal: ElementRef;
  @ViewChild('vertical') vertical: ElementRef;

  isScrolled = false;
  mouseOverTrumb = false;
  horizontalThumbActive = false;
  verticalThumbActive = false;
  scrollBarDragged = false;
  horizontalThumbDragOffset: number;
  verticalThumbDragOffset: number;


  constructor(private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  horizontalScrollInPercents(scrollLeft, scrollWidth, clientWidth) {
    this.info.percentsScroll = scrollLeft / (scrollWidth - clientWidth);
  }

  //vertical
// @ts-ignore
  verticalScrollInPercents(scrollTop, scrollHeight, clientHeight) {
    this.info.percentsScroll = scrollTop / (scrollHeight - clientHeight);
  }

  mouseOverToggle(isOver: boolean) {
    this.mouseOverTrumb = isOver;
  }

  // (wheel)="wheeled()" on #bar
  wheeled() {
    console.log(this.info.horizontalPosition);

    // let delta = this.info.horizontalPosition -
    if (this.info.horizontalPosition == 0 || this.info.horizontalPosition == 100 || this.info.horizontalPosition == undefined) {
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
    const {clientWidth, scrollWidth} = this.bar.nativeElement;

    // for vertical
    const {clientHeight, scrollHeight} = this.bar.nativeElement;

    this.info.horizontalSize = Math.ceil(clientWidth / scrollWidth * 100);
    // for vertical
    this.info.verticalSize = Math.ceil(clientHeight / scrollHeight * 100);
    this.cdref.detectChanges();
  }

  horizontalScrolledF() {
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.bar.nativeElement;

    this.info.horizontalScrolled = scrollLeft / (scrollWidth - clientWidth);
    return this.info.horizontalScrolled;
  }

  horizontalSizeF(): number {
    const {clientWidth, scrollWidth} = this.bar.nativeElement;

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
  onHorizontalStart(event: MouseEvent) {
    this.scrollBarDragged = true;
    event.preventDefault();

    const {target, clientX} = event;
    // @ts-ignore
    const {left, width} = target.getBoundingClientRect();

    this.horizontalThumbDragOffset = (clientX - left) / width;
    this.horizontalThumbActive = true;
  }

  onHorizontalMove(
    {clientX}: MouseEvent,
    {offsetWidth}: HTMLElement,
    target: any
  ) {

    if (!this.horizontalThumbActive && !this.scrollBarDragged) {
      return;
    }

    const {nativeElement} = this.bar;
    const {left, width} = nativeElement.getBoundingClientRect();
    const maxScrollLeft = nativeElement.scrollWidth - width;
    const scrolled =
      (clientX - left - offsetWidth * this.horizontalThumbDragOffset) /
      (width - offsetWidth);

    nativeElement.scrollLeft = maxScrollLeft * scrolled;
  }

//  vertical part

  verticalScrolledF() {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = this.bar.nativeElement;

    this.info.verticalScrolled = scrollTop / (scrollHeight - clientHeight);
    console.log(this.info.verticalScrolled);
    return this.info.verticalScrolled;
  }

  verticalSizeF(): number {
    const {clientHeight, scrollHeight} = this.bar.nativeElement;

    this.info.verticalSize = Math.ceil(clientHeight / scrollHeight * 100);
    return Math.ceil(clientHeight / scrollHeight * 100);
  }

  // Thumb position from the left in percents
  verticalPositionF(): number {
    this.info.verticalPosition = this.verticalScrolledF() * (100 - this.verticalSizeF());
    return this.verticalScrolledF() * (100 - this.verticalSizeF());
  }

  // Content overflown, we see thumb
  hasVerticalBarF(): boolean {
    this.info.hasVerticalBar = this.verticalSizeF() < 100;
    return this.verticalSizeF() < 100;
  }


  setScrollInfo(event: any) {

    if (this.axis === 'vertical') {
      this.verticalThumbActive = true;
      this.isScrolled = true;

      timer(300).pipe(
      ).subscribe(x => {
        this.isScrolled = false;
        this.verticalThumbActive = false;
      });

      this.verticalScrolledF();
      this.verticalSizeF();
      this.verticalPositionF();
      this.hasVerticalBarF();

      this.verticalScrollInPercents(event.target.scrollLeft, event.target.scrollWidth, event.target.clientWidth);


      this.info.clientY = event.clientY;
      this.info.targetscrollTop = event.target.scrollTop;
    } else {
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

      this.horizontalScrollInPercents(event.target.scrollLeft, event.target.scrollWidth, event.target.clientWidth);


      this.info.clientX = event.clientX;
      this.info.targetScrollLeft = event.target.scrollLeft;
    }
  }

  @HostListener('document:mouseup')
  onDragEnd() {
    if (this.axis === 'vertical') {
      this.verticalThumbActive = false;
    } else {
      this.horizontalThumbActive = false;
    }

    this.scrollBarDragged = false;
  }

  onVerticalStart(event: MouseEvent) {
    this.scrollBarDragged = true;
    event.preventDefault();

    const {target, clientY} = event;
    // @ts-ignore
    const {top, height} = target.getBoundingClientRect();

    this.verticalThumbDragOffset = (clientY - top) / height;
    this.verticalThumbActive = true;
  }

  onVerticalMove(
    {clientY}: MouseEvent,
    {offsetHeight}: HTMLElement,
    target: any
  ) {

    if (!this.verticalThumbActive && !this.scrollBarDragged) {
      return;
    }

    const {nativeElement} = this.bar;
    const {top, height} = nativeElement.getBoundingClientRect();
    const maxscrollTop = nativeElement.scrollHeight - height;
    const scrolled =
      (clientY - top - offsetHeight * this.verticalThumbDragOffset) /
      (height - offsetHeight);

    nativeElement.scrollTop = maxscrollTop * scrolled;
  }

}
