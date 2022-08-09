import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})


export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating : number;
    @Output() ratingClicked : EventEmitter<string> = new  EventEmitter<string>();

    onClick(){
        this.ratingClicked.emit(this.rating.toString());
        // console.log(this.rating);
    }

    ngOnChanges():void {
        this.starWidth = this.rating * 86/5;
    }
}