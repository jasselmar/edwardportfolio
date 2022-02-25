export interface Post {
  _id: string
  title: string
  dimensions: string
  year: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}
