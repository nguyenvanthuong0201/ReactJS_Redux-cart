let initialState=[
    {
        id:1,
        name:"Iphone 10 plus",
        image:"/images/phone4.png",
        description:"Sản phầm này do Apple sản xuất",
        price:500,
        inventory:10,
        rating:5,
    },
    {
        id:2,
        name:"Oppo Reno 4",
        image:"/images/phone2.png",
        description:"Sản phầm này do Oppo sản xuất",
        price:600,
        inventory:15,
        rating:4,
    },
    {
        id:3,
        name:"SamSung Galaxy S+",
        image:"/images/phone3.png",
        description:"Sản phầm này do SamSung sản xuất",
        price:800,
        inventory:4,
        rating:2,
    },
]
const products =(state=initialState,action)=>{
    switch (action.type) {
        default: return[...state];
    }
}
export default products 