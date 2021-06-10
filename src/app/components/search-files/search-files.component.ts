import { Component, OnInit } from '@angular/core';
import { SearchFileService } from 'src/app/services/search-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-files',
  templateUrl: './search-files.component.html',
  styleUrls: ['./search-files.component.css']
})
export class SearchFilesComponent implements OnInit {
  searchResults!: Observable<string[]>;
  message = '';
  constructor(private searchfilesService: SearchFileService) { }


  search(query: string) {
    this.searchResults = this.searchfilesService.search(query);
  }

  ngOnInit(): void {}

}
