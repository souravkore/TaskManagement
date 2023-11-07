import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }
  items: any;
  showConfirmationModal: boolean = false;
  confirmationMessage: string = '';
  actionType: string = '';
  id: number = 0;
  username: string = "";

  ngOnInit() {
    // this.itemService.getItems().subscribe((data) => {
    //   this.items = data;
    //   this.items = this.items.filter((x: any) => x.createdby === this.username);
    // });
    // this.itemService.getUsername().subscribe((data) => {
    //   this.username = data.username;
    // });

    this.itemService.getUsername().subscribe((data) => {
      this.username = data.username;
      
      // Fetch items and filter them by the username within the same subscribe block
      this.itemService.getItems(this.username).subscribe((itemsData:any) => {
        this.items = itemsData.filter((item: any) => item.createdby === this.username);
      });
    });
  }
  onItemClick(itemId: number) {
    this.router.navigate(['/edit', itemId]);
  }

  onEditClick(item: any) {
    this.confirmationMessage = 'Are you sure you want to edit this item?';
    this.actionType = 'Edit';
    this.showConfirmationModal = true;
    this.id = item.id;
  }

  onDeleteClick(item: any) {
    this.confirmationMessage = 'Are you sure you want to delete this item?';
    this.actionType = 'Delete';
    this.showConfirmationModal = true;
    this.id = item.id;
  }

  cancelAction() {
    this.showConfirmationModal = false;
  }

  performAction() {
    if (this.actionType === 'Edit') {
      this.router.navigate(['/edit', this.id]);
    }
    else if (this.actionType === 'Delete') {
      this.itemService.deleteItem(this.id, this.items).subscribe(() => {
        this.items = this.items.filter((item: any) => item.id !== this.id);
      });
    }
    this.showConfirmationModal = false;
  }
  CreateNew() {
    this.router.navigate(['/create']);
  }
}
