import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {

  constructor(
    private _eleref : ElementRef
  ) { }

  // @HostListener('keyup', ['$event'])
  // onKeyUp(eve: Event){
  //   let val = (this._eleref.nativeElement.value as string).toLocaleLowerCase();
  //   console.log(val);
  //   this._eleref.nativeElement.value = val
  // }

  @HostListener('keyup', ['$event'])
  onKeyUp(eve: Event){
    let inputControl = (eve.target as HTMLInputElement);
    let val = (this._eleref.nativeElement.value as string).toLocaleLowerCase();
    console.log(val);
    inputControl.value = val;
  }

}
