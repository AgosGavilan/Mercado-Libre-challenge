export interface ProductPicture extends Record<string, any> {
  id: string;
  url: string;
  title?: string;
  price?: number;
}

export interface Product extends Record<string, any> {
  id?: string;
  title?: string;
  price?: number;
  currency_id?: string;
  sold_quantity?: number;
  condition?: string;
  pictures: ProductPicture[];
  attributes: any[]
}

export interface PyR {
  pregunta: string;
  respuesta?: string
  date?: string
}

export interface Review {
  estrellas: string;
  value: number;
  cantidadPersonas: number;
  colorScheme?: string
}

export interface Opiniones {
  titulo: string;
  comentario: string;
  date: string;
  id: string;
}
