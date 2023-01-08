import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { ItemsListDTO } from '../DTO/itemsListDTO';
import { Item } from '../classes/item';
import { ItemDTO } from '../DTO/itemDTO';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  // private subject = new BehaviorSubject<Item[]>([]);
  // items$: Observable<Item[]> = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<ItemsListDTO> {
    // return this.http.get<ItemsListDTO>('/api/items');

    // для теста
    return this.http.get<ItemsListDTO>('assets/ItemsList.json');
  }

  public GetOne(iid: number): Observable<ItemDTO> {
    console.log(`GET ${iid}`);
    return this.http.get<ItemDTO>(`ss/api/items/${iid}`);
  }

  public CreateItem(item: Item) {
    let itemDTO = Object.assign(new ItemDTO(), item);
    console.log(itemDTO);

    return this.http.post<ItemDTO>('/api/items', itemDTO);
  }
}
