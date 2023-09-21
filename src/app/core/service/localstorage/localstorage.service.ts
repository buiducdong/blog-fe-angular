/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private storage!: Storage;

  public constructor() { 
    this.storage = localStorage;
  }

  public add(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): any {
    const value = this.storage.getItem(key);

    return value ? JSON.parse(value) : null;
  }

  public remove(key: string): void{
    this.storage.removeItem(key);
  }
}
