import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {

  item: any;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itemService.getItem(id).subscribe((data) => {
        console.log('Data:', data);
        this.item = data;
      });
    }
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];
    this.itemService.updateItem(id, this.item).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  saveChanges(){
    this.onSubmit();
  }
}
