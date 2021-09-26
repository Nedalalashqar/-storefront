const initialState = {


  categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },

    ],



    products: [
        { name: 'Iphone', category: 'electronics', price: 600.00, inStock: 9,
        image:'https://mob4g.com/wp-content/uploads/2020/01/iPhone-11-600x600.jpeg' },

        { name: 'Samsung‏ UHD 4K Smart', category: 'electronics', price: 999.00, inStock: 7,
          image:'https://images.samsung.com/is/image/samsung/p6pim/levant/ua43au7000uxtw/gallery/levant-uhd-au7000-ua43au7000uxtw-409719074?$720_576_PNG$' },

          { name: 'Radio', category: 'electronics', price: 150.00, inStock: 4,
        image:'https://asset.conrad.com/media10/isa/160267/c1/-/en/002219466PI01/image.jpg' },

        { name: 'Jacket', category: 'clothing', price: 50.00, inStock: 50,
        image: 'https://martinvalen.com/10402-large_default/men-s-pilot-jacket-in-black.jpg' },

        { name: 'Jeans', category: 'clothing', price: 15.00, inStock:35,
        image:'https://i1.wp.com/ae01.alicdn.com/kf/HTB1UQABQ6DpK1RjSZFrq6y78VXaW/Jantour-Brand-Skinny-jeans-men-Slim-Fit-Denim-Joggers-Stretch-Male-Jean-Pencil-Pants-Blue-Men.jpg?fit=510%2C510&ssl=1' },

        { name: 'T-Shirt', category: 'clothing', price:17.00, inStock: 17,
        image:'https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg' },

        { name: 'Melon', category: 'food', price: 0.50, inStock: 300,
        image:'data:image/jpeg;base64,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' },

        { name: 'Peache', category: 'food', price: 1.50, inStock: 1000,
        image:'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f42b5182138dffac9bf05b7%2F0x0.jpg%3FcropX1%3D549%26cropX2%3D8140%26cropY1%3D0%26cropY2%3D5693' },

        { name: 'Pear', category: 'food', price: 2.00, inStock: 950,
        image:'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Multifruit_Pear_600x600_effb9abc-71f5-4109-90d7-c95a99fb3650_grande.jpg?v=1629473472' },

        { name: 'Apple', category: 'food', price: 2.50, inStock: 600,
        image:'https://www.metropost.net/wp-content/uploads/2021/03/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%AD.jpg' },

        { name: 'Potato', category: 'food', price: 0.50, inStock: 450,
        image:'https://images.theconversation.com/files/401955/original/file-20210520-23-83r6ds.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' },

        { name: 'Tomato', category: 'food', price: 0.70, inStock: 500,
        image:'https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg' },
   


    ],
    
    
    activeCategory: 'electronics',
  };
  
export default (state = initialState, action) => {
    let { type, payload } = action;
    
    switch (type) {
        case "catigories":
            if (payload.toLowerCase() == "electronics" || payload.toLowerCase() == "clothing"
    
            || payload.toLowerCase() == "food")
            {
              return {...state, activeCategory: payload }; 
    
            }
                
        default:
            return {...state};
    
          }

}
  



export const sendActiveCat = (activeCategory) => {
    return {
        type: "catigories",
        payload: activeCategory
    }
}