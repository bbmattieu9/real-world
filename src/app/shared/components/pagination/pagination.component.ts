import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../data-access/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{

  constructor(private utilSrv: UtilsService) { }

  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Input() currentPage: number = 1;
  @Input() url: string = '';

  pagesCount: number = 1;
  pages: number[] = [];


  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    console.log('[ __Pages Count__]:', this.pagesCount);

    this.pages = this.pagesCount > 0 ? this.utilSrv.range(1, this.pagesCount) : [];
    console.log('[__Pages__]:', this.pages);
  }

}
