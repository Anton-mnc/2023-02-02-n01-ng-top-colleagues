import {Injectable} from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  private _colleagues: Colleague[] = [
    {photo: "https://picsum.photos/200/200", pseudo: "Anton", score: 0},
    {photo: "https://picsum.photos/200/201", pseudo: "Lolo", score: 100},
    {photo: "https://picsum.photos/200/202", pseudo: "Gio", score: -200},
    {photo: "https://picsum.photos/200/203", pseudo: "Jojo", score: 1000},
    {photo: "https://picsum.photos/200/204", pseudo: "Leonelle", score: -1000},
    {photo: "https://picsum.photos/200/205", pseudo: "Able", score: 400,},
    {photo: "https://picsum.photos/200/206", pseudo: "Lucas", score: 0},
    {photo: "https://picsum.photos/200/207", pseudo: "Matthieu", score: 0},
    {photo: "https://picsum.photos/200/208", pseudo: "Sebi", score: 0},
    {photo: "https://picsum.photos/200/209", pseudo: "Antoile", score: 0},
    {photo: "https://picsum.photos/200/210", pseudo: "Antoite", score: 0},
    {photo: "https://picsum.photos/200/211", pseudo: "Veepee", score: 0},
    {photo: "https://picsum.photos/200/212", pseudo: "Elich", score: 0},
    {photo: "https://picsum.photos/200/213", pseudo: "Syl", score: 0},
    {photo: "https://picsum.photos/200/214", pseudo: "Pöele", score: 0},
  ]

  constructor(private http: HttpClient) {
  }

  get colleagues(): Colleague[] {
    return this._colleagues;
  }

  getAllColleagueFromApi(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues')
  }
}
