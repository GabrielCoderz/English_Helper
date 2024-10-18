import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface VideoLegendResponse {
  success: boolean;
  data: any;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Video {
  url: string;
}

@Injectable()
export class VideoLegendService {

private apiUrl = 'http://localhost:3000/transcript';

constructor(private http: HttpClient) { }

postVideoUrl(url: string): Observable<any> {
  const body = { url };

  return this.http.post<any>(this.apiUrl, body);
}

}
