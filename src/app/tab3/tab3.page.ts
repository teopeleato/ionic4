import { Component, OnInit } from "@angular/core"
import { WeatherService } from "./../services/weather.service"
import { HttpClient } from "@angular/common/http"

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  domain = "https://opendata.aemet.es/opendata/api/"
  query = "prediccion/especifica/municipio/diaria/"
  apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW9wZWxlYXRvQGdtYWlsLmNvbSIsImp0aSI6IjcwZDVhYTgwLWUwMjAtNDBjYi1iOGRiLWE4YTdlNjIyYjIxYyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTUwMDcwMzQzLCJ1c2VySWQiOiI3MGQ1YWE4MC1lMDIwLTQwY2ItYjhkYi1hOGE3ZTYyMmIyMWMiLCJyb2xlIjoiIn0.O6VkfD4w57AYlgEPszFft192CY6dF0Nh0lIYpQWaAhM"
  prediccionDias: any
  dia1: any
  dia2: any
  dia3: any
  dia4: any
  dia5: any
  dia6: any
  dia7: any
  max: any
  placeId = ""
  placeName = ""
  arrayDias = []

  sliderConfig = {
    autoplay: true,
    delay: 5000,
    speed: 1
  }

  constructor(
    private weatherService: WeatherService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Huesca id: 22125
    this.getAemetUrl("22125")
  }

  /**
   * Get URL from Aemet API and call to weather query function
   */
  getAemetUrl(placeId: string) {
    // console.log("placeId: " + placeId)
    const { domain, query, apiKey } = this
    const Http = new XMLHttpRequest()
    /* const url = `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${placeId}/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW9wZWxlYXRvQGdtYWlsLmNvbSIsImp0aSI6IjcwZDVhYTgwLWUwMjAtNDBjYi1iOGRiLWE4YTdlNjIyYjIxYyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTUwMDcwMzQzLCJ1c2VySWQiOiI3MGQ1YWE4MC1lMDIwLTQwY2ItYjhkYi1hOGE3ZTYyMmIyMWMiLCJyb2xlIjoiIn0.O6VkfD4w57AYlgEPszFft192CY6dF0Nh0lIYpQWaAhM` */
    const url = `${domain}${query}${placeId}/?api_key=${apiKey}`
    Http.open("GET", url)
    Http.send()
    Http.onreadystatechange = e => {
      const data = Http.responseText
      // console.log(data)
      if (data) {
        const jsonResponse = JSON.parse(data)
        const datosUrl = jsonResponse["datos"]
        // console.log("datosUrl: " + datosUrl)
        this.searchWeather(datosUrl)
      }
    }
  }

  /**
   *
   * Request weather from Aemet API, once we have generated the URL
   * @param url
   */
  searchWeather(url: string) {
    this.http.get(url).subscribe(data => {
      this.placeName = data[0]["nombre"]
      this.prediccionDias = data[0]["prediccion"]["dia"]
      this.dia1 = this.prediccionDias[0]
      this.dia2 = this.prediccionDias[1]
      this.dia3 = this.prediccionDias[2]
      this.dia4 = this.prediccionDias[3]
      this.dia5 = this.prediccionDias[4]
      this.dia6 = this.prediccionDias[5]
      this.dia7 = this.prediccionDias[6]

      this.arrayDias = [
        this.dia1,
        this.dia2,
        this.dia3,
        this.dia4,
        this.dia5,
        this.dia6,
        this.dia7
      ]
      //console.log("dia1: " + JSON.stringify(this.dia1))
    })
  }
}
