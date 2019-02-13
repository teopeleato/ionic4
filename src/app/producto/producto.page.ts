import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-producto",
  templateUrl: "./producto.page.html",
  styleUrls: ["./producto.page.scss"]
})
export class ProductoPage implements OnInit {
  private products = [
    {
      id: "uncharted",
      name: "Uncharted",
      price: 20,
      text:
        "Desde los innovadores narradores de Naughty Dog, llega esta historia épica que define al género y que ha revolucionado las historias de aventuras, rediseñado por Bluepoint Games con el poder del sistema PS4. Experimenta una de las series de juego más veneradas de todos los tiempos cuando sigas el peligroso viaje de Nathan Drake alrededor del globo, desde sus humildes inicios hasta sus extraordinarios descubrimientos. Conoce a un inolvidable elenco de personajes a medida que Drake arriesga la vida y la amistad en una carrera contra despiadados enemigos para descubrir un tesoro inimaginable."
    },
    {
      id: "canyon-300",
      name: "Gran Canyon 300",
      price: 995,
      text:
        "Igual que con cualquier otra bici de Factory Outlet, te ofrecemos para éstas de la categoría 2 la misma garantía que damos en cualquier bici de serie. Incluso estas bicis normalmente han sido montadas por nuestro personal de talleres, verificadas, y si hubiera sido necesario reajustadas."
    },
    {
      id: "back-in-black",
      name: "Back in Black",
      price: 15,
      text:
        "Hace 35 años, a fines de abril de 1980, se publicó “Back in Black”, disco que se transformaría en una leyenda del hard rock no solo por sus tremendas canciones y porque marcaría la carrera de la banda australiana AC / DC para la posteridad. El álbum también se transformaría con los años en el tercer disco más vendido en la historia de la música, con más de 50 millones de unidades en sus diversos formatos, precedidos por “Thriller”, de Michel Jackson, y “Dark Side of the Moon”, de Pink Floyd, en ese orden."
    },
    {
      id: "sentido-vida",
      name: "El Sentido de la Vida",
      price: 18,
      text:
        "Conjunto de episodios que muestran de forma disparatada los momentos más importantes del ciclo de la vida. Desde el nacimiento a la muerte, pasando por asuntos como la filosofía, la historia o la medicina, todo tratado con el inconfundible humor de los populares cómicos ingleses."
    }
  ]

  id = ""
  name = ""
  text = ""
  price = null

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    const myProduct = this.products.find(prod => prod.id === this.id)
    const { name, text, price } = myProduct
    this.name = name
    this.text = text
    this.price = price
  }
}
