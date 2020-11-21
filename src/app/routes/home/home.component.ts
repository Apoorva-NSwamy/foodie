import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import { FoodieService } from 'src/app/services/foodie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  options = [];
  filteredOptions = [];
  constructor(private srv: FoodieService, private router: Router) {
    this.myControl.valueChanges.pipe(distinctUntilChanged()).subscribe((value: string) => {
      if (value) {
        this.autoComplete(value);
      }
    });
   }

  ngOnInit(): void {
  }
  displayFn(obj?: any) {
    return obj ? obj.strMeal : '';
  }
  autoComplete(searchText: string) {
    this.srv.autoComplete(searchText).subscribe((res: any) => {
      if (res.meals) {
        this.filteredOptions = res.meals;
      }
    });
  }
  searchFood(searchText: any) {
    const text = searchText.strMeal;
    this.router.navigate(['/details'], { queryParams: { q: text }});
  }
}
