// export interface ratingItem {
//   count:number,
//   rate:number
// }

export interface ProductDTO {
  category:string
  description:string,
  id:number
  image:string
  price:number,
  rating: {
    count:number,
    rate:number
  }
  title:string,
}
