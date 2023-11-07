import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createItem(item: any) {
    return this.http.post(`${this.baseUrl}/items`, item);
  }

  getItems(username: string) {
    return this.http.get(`${this.baseUrl}/items/${username}`);
  }

  getItem(id: number) {
    return this.http.get(`${this.baseUrl}/items/${id}`);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.baseUrl}/items/${id}`, item);
  }

  deleteItem(id: number, item: any) {
    return this.http.delete(`${this.baseUrl}/items/${id}`, item);
  }
  getUsername(): Observable<any> {
    return this.http.get(`${this.baseUrl}/username`); // Replace with the appropriate URL if needed
  }
}
