import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from '../../types/popularTag.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent implements OnInit{

  @Input() tags: PopularTagType[] = [];


  ngOnInit(): void {
    
  }

}
