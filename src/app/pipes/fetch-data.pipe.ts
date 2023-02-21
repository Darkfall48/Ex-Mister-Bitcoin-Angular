import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchData',
  pure: false,
})
export class FetchDataPipe implements PipeTransform {
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  fetchData: any = null;
  fetchUrl = '';

  transform(url: string): any {
    if (url !== this.fetchUrl) {
      this.fetchData = null;
      this.fetchUrl = url;
      this.http.get<any>(url).subscribe((data) => {
        this.fetchData = data;
        this.cd.markForCheck();
      });
    }

    return this.fetchData;
  }
}
