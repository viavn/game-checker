import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItems(key: string): Promise<any[]> {
    return new Promise(resolve => {
      let items = JSON.parse(localStorage.getItem(key));
      items = items && items.length > 0 ? items : [];
      resolve(items);
    });
  }

  save(item: any[], localStorageKey: string): Promise<void> {
    return new Promise(resolve => {
      localStorage.setItem(localStorageKey, JSON.stringify(item));
      resolve();
    });
  }
}
