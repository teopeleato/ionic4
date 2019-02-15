import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable, of, throwError } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  url = "https://opendata.aemet.es/opendata/api/prediccion/nacional/hoy/"
  apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW9wZWxlYXRvQGdtYWlsLmNvbSIsImp0aSI6IjcwZDVhYTgwLWUwMjAtNDBjYi1iOGRiLWE4YTdlNjIyYjIxYyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTUwMDcwMzQzLCJ1c2VySWQiOiI3MGQ1YWE4MC1lMDIwLTQwY2ItYjhkYi1hOGE3ZTYyMmIyMWMiLCJyb2xlIjoiIn0.O6VkfD4w57AYlgEPszFft192CY6dF0Nh0lIYpQWaAhM"
  fullurl = this.url + "?api_key=" + this.apiKey
  // aaaaa = `"${this.fullurl}"`
  results = null

  /* temperaturaMax: any
  temperaturaMin: any */
  /* data0: any */

  constructor(private http: HttpClient) {}

  /**
   * Get URL from Aemet API and call to weather query function
   */
  getAemetUrl() {
    const Http = new XMLHttpRequest()
    const url =
      "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/22125/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW9wZWxlYXRvQGdtYWlsLmNvbSIsImp0aSI6IjcwZDVhYTgwLWUwMjAtNDBjYi1iOGRiLWE4YTdlNjIyYjIxYyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTUwMDcwMzQzLCJ1c2VySWQiOiI3MGQ1YWE4MC1lMDIwLTQwY2ItYjhkYi1hOGE3ZTYyMmIyMWMiLCJyb2xlIjoiIn0.O6VkfD4w57AYlgEPszFft192CY6dF0Nh0lIYpQWaAhM"
    Http.open("GET", url)
    Http.send()
    Http.onreadystatechange = e => {
      const data = Http.responseText
      // console.log(data)
      const jsonResponse = JSON.parse(data)
      const datosUrl = jsonResponse["datos"]
      // console.log("datosUrl: " + datosUrl)
      this.searchWeather(datosUrl)
    }
    // return this.results
  }

  /**
   *
   * Request weather from Aemet API, once we have generated the URL
   * @param url
   */
  searchWeather(url): Observable<any> {
    return this.http.get(url)
  }
}
