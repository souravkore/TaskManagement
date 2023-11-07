import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }
  item: any = { id: 0, name: '', description: '' };
  username: string = "";
  ngOnInit() {
    this.itemService.getUsername().subscribe((data) => {
      this.username = data.username;
    });
  }
  onSubmit() {
    const formData = {
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      username : this.username
    };

    this.itemService.createItem(formData).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  saveChanges() {
    this.onSubmit();
  }
}
