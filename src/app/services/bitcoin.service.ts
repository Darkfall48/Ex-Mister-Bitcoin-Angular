import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  private rateUrl: string =
    'https://blockchain.info/tobtc?currency=USD&value=1';
  private priceHistoryUrl: string =
    'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true';
  private avgBlockSizeUrl: string =
    'https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true';

  //? Get Exchanges Rate in USD to BTC
  public getRate() {
    return this.getResult('Rate', this.rateUrl);
  }

  //? Get Market Price History
  public async getPriceHistory() {
    try {
      return await this.getResult('Price History', this.priceHistoryUrl);
    } catch (err) {
      console.log('Cannot get market price history:', err);
      throw err;
    }
  }

  //? Get Average Block Size
  public async getAvgBlockSize() {
    try {
      return await this.getResult('Avg Block Size', this.avgBlockSizeUrl);
    } catch (err) {
      console.log('Cannot get average block size:', err);
      throw err;
    }
  }

  private getResult(type: string, url: string) {
    const result = loadFromStorage(type);
    if (result) return Promise.resolve(result);
    return lastValueFrom(
      this.http
        .get<{ answer: string }>(url)
        .pipe(tap((res) => saveToStorage(type, res)))
    );
  }
}

function saveToStorage(key: string, value: any) {
  const data: any = JSON.stringify(value) || null;
  localStorage.setItem(key, data);
}

function loadFromStorage(key: string) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}
