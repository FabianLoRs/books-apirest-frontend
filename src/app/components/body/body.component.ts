import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  categories: any;
  arrayCategories: any;

  constructor(private _categories: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._categories.getCategories()
        .subscribe((reponse: any) => {
          this.categories = reponse;
          this.arrayCategories = this.categories.categoryResponse.category;
          console.log(this.arrayCategories);
    });
  }
}
