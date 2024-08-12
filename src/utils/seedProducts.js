
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Los 'id' los borramos, ya que Firebase los crea
const products = 
[
    {
        name: "CAMISA CLAUS NEW RAY",
        price: 3419,
        category: "hombre",
        stock: 4,
        img: "CAMISA CLAUS NEW RAY",
        description: "Camisa Slim Fit con rayas muy finas, cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "CAMISA CLAUS NEW BASIC",
        price: 4599,
        stock: 3,
        category: "hombre",
        img: "CAMISA CLAUS NEW BASIC",
        description: "Camisa de cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "REMERA OWEN NEIL BIEST SKATEPARK",
        price: 1979,
        stock: 5,
        category: "hombre",
        img: "REMERA OWEN NEIL BIEST SKATEPARK",
        description: "Remera caja grande, estampada, cuello redondo y manga corta."
    },
    {
        name: "REMERA OVERAN BASIC",
        price: 1949,
        stock: 6,
        category: "hombre",
        img: "REMERA OVERAN BASIC",
        description: "Remera unisex oversize de jersey de algodón, escote redondo, cuello alto de ribb y etiqueta de tela en pecho."
    },
    {
        name: "REMERA RESKI PETER GIRLS",
        price: 1219,
        stock: 3,
        category: "mujer",
        img: "REMERA RESKI PETER GIRLS",
        description: "Remera manga corta y cuello redondo."
    },
    {
        name: "REMERA BLOCK LIN",
        price: 1819,
        stock: 5,
        category: "mujer",
        img: "REMERA BLOCK LIN",
        description: "Remera manga corta, cuello en V."
    },
    {
        name: "CAMISA ARABELLA VIYELA",
        price: 3779,
        stock: 4,
        category: "mujer",
        img: "CAMISA ARABELLA VIYELA",
        description: "Camisa de viyela cuadrillé, con bolsillo frontal."
    },
    {
        name: "MUSCULOSA CASUAL BASIC",
        price: 1159,
        stock: 6,
        category: "mujer",
        img: "MUSCULOSA CASUAL BASIC",
        description: "Musculosa básica de morley con cuello redondo."
    },
    {
        name: "MUSCULOSA ESTRELLA",
        price: 1299,
        stock: 10,
        category: "mujer",
        img: "MUSCULOSA ESTRELLA",
        description: "Musculosa de morley con lurex y frunces en los laterales."
    }
];

// La siguiente funcion, la ejecutamos en el archivo 'ItemListContainer.jsx'
// OBS se debe generar una sola vez para cargar los datos y despues se borra
/*
useEffect(() => {
    seedProducts()
  }, [category])
*/

export const seedProducts = () => {

    products.forEach(product => {
        // Agregamos el producto a nuestra base de datos
        addDoc(collection(db, "products"), product)
    })

}
