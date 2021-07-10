import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <button (click)="parentClick()">parent button</button>
  {{getParentValue()}}
  
  <app-child></app-child>
</div>`,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'angular-change-detection';
  parentValue = 0;

  ngOnInit(): void {
    setInterval(() => this.parentValue++, 1000);
  }

  parentClick(): void {
    console.log('parent clicked')
  }

  getParentValue() {
    return this.parentValue;
  }
}

@Component({
  selector: 'app-child',
  template: `
    <div>
  <button (click)="childClick()">child button</button>
{{getChildValue()}}

<app-super-child></app-super-child>


</div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  title = 'angular-change-detection';
  childValue = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
     this.changeDetectorRef.detach();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.childValue++;


    }, 1000);
  }

  childClick(): void {
    console.log('child clicked');
    this.changeDetectorRef.detectChanges();
    this.changeDetectorRef.markForCheck();
  }

  getChildValue() {
    return this.childValue;
  }
}

@Component({
  selector: 'app-super-child',
  template: `
      <div>
  <button (click)="superChildClick()">super child button</button>
{{getSuperChildValue()}}
      </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperChildComponent implements OnInit {
  superChildValue = 0;

  ngOnInit(): void {
    setInterval(() => this.superChildValue++, 1000);
  }

  superChildClick(): void {
    console.log('super child clicked')
  }

  getSuperChildValue() {
    return this.superChildValue;
  }
}
