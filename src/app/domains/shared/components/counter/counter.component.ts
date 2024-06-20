import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal} from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {


  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  counter = signal(0);
  counterRef: number=0;

  constructor(){
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnchanges');
    console.log('-'.repeat(10));
    console.log(changes)

    const duration = changes['duration'];

    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }

  }

  ngOnInit(){
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    console.log('-'.repeat(10));

   this.counterRef = window.setInterval(()=>{
    console.log('run interval');
    this.counter.update(statePrev => statePrev +1 );
    }
    , 1000)

  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() : void{
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
   }

  doSomething(){
   console.log('change - duration ');
  }
}
