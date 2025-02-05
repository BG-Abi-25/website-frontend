import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() pictures: string = ''; 
  @Input() head: string = ''; 
  @Input() preview: string = ''; 

}
