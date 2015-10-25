import {Component} from 'angular2/angular2';

@Component({
	selector: 'zippy',
	template: `
		<div class="zippy">
			<div class="zippy_title" (click)="toggle()">
				{{ visible ? '&blacktriangledown;' : '&blacktriangleright;'}} {{title}}
			</div>
			<div class="zippy_content" [hidden]="!visible">
				<br/>
				<p>This is hard coded content BEFORE transcluded content.</p>
				<ng-content></ng-content>
				<p>This is hard coded content AFTER transcluded content.</p>
			</div>
	`,
	styles: [`
		.zippy {
  			//background: red;
		}
		
		.zippy_title {
			background: blue; 	
		}
		
		.zippy_content {
			background: green
		}
		
	`		
	],
	properties: ['title']						
})
export class Zippy {
	
	constructor() {
		this.visible = false;
	}
	
	toggle() {
		this.visible = !this.visible;
	}
}