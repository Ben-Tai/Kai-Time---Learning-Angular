import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the params to get the id
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // checking if the params is not null then will change edit mode to true;
        // if there is no id then it must be new
        this.editMode = params['id'] != null;
      }
    );
  }

}
