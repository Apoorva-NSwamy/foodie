import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IframeDialogComponent } from 'src/app/components/iframe-dialog/iframe-dialog.component';
import { FoodieService } from 'src/app/services/foodie.service';

export interface IMealObj {
  name: string;
  quantity: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  searchMeal = '';
  mealData: any;
  loader = true;
  ingredientsList: IMealObj[] = [];
  tagList: string[] = [];
  obj = {
    name: '',
    quantity: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: FoodieService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchMeal = params.q;
    });
    this.srv.search(this.searchMeal).subscribe((result: any) => {
      this.mealData = result.meals[0];
      this.getPageData();
      this.loader = false;
    });
  }
  openDialog(dataLink: string, meal: string): void {
    const dialogRef = this.dialog.open(IframeDialogComponent, {
      data: {link: dataLink, mealName: meal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getPageData() {
    for (let i = 1; i < 21; i++) {
      this.obj = {
        name: this.mealData[`strIngredient${i}`],
        quantity: this.mealData[`strMeasure${i}`],
      };
      this.ingredientsList.push(this.obj);
    }
  }

}
