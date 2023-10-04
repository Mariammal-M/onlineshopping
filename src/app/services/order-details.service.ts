import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Calvin Klein Jeans Women T-shirt",
      foodDetails:"Knitted pure cotton fabric",
      foodPrice:700,
      foodImg:"https://img.freepik.com/free-photo/smiley-woman-wearing-white-shirt_23-2149322992.jpg?w=996&t=st=1695574659~exp=1695575259~hmac=58154490782576b557fd05746a247ca074022f91cfa132571dbccd5f0caebef5"
    },
    {
      id:2,
      foodName:"Light blue Tiered Dress",
      foodDetails:"A tiered silhoutte that is slightly fitted on top",
      foodPrice:569,
      foodImg:"https://img.freepik.com/free-photo/portrait-young-happy-smiling-woman-model-with-bright-makeup-red-lips-with-two-pigtails-hands-summer-colorful-blue-dress-backpack-isolated-giving-air-kiss_158538-8667.jpg?w=740&t=st=1695574767~exp=1695575367~hmac=01d62f343ef726d8427f5846dc5432fb8bb4c330309b0c12cf159d6c6883d30e"
    },
    {
      id:3,
      foodName:"Madame Mauve Top",
      foodDetails:"A stylish , statement making addition to any wardrobe",
      foodPrice:949,
      foodImg:"https://www.glamly.com/cdn/shop/files/2_05a490d5-cd08-4f2e-9798-ed969db3863b_900x.jpg?v=1691650717"
    },
    {
      id:4,
      foodName:"Madame Graphic print Top",
      foodDetails:"Material Composition -Cotton",
      foodPrice:840,
      foodImg:"https://www.glamly.com/cdn/shop/products/1_c4bcbab0-cdb3-4ccd-b029-a58aba4821fc_900x.jpg?v=1676629045"
    },
    {
      id:5,
      foodName:"Rassio Women Shirt Dark Green Dress",
      foodDetails:"v-neck,Fabric-polyester",
      foodPrice:905,
      foodImg:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNYRW0b1bWqO3PhiQQDzI27pZwMOJ3drO5n55SB1wdWHLRszyyWZff0dCVsTb0klS2piDDnqQN-wzNQGho-1kv8YJukZGdhBXOSJPt_SGvGqKJ8_A5P1Qk"
    },
    {
      id:6,
      foodName:"Women Embellised Kurta",
      foodDetails:"pattern-Embellished Type-A line",
      foodPrice:2119,
      foodImg:"https://www.libas.in/cdn/shop/files/yellow-embellished-silk-kurta-libas-1_1800x1800.jpg?v=1695043845"
    },
    {
      id:7,
      foodName:"Aurelia Women Shirt Black,White Dress",
      foodDetails:"pattern-Checkered",
      foodprice:500,
      foodImg:"https://rukminim2.flixcart.com/image/832/832/kl6wx3k0/dress/c/i/b/xs-21fea11522-701449-aurelia-original-imagyd46d7gyyxxn.jpeg?q=70"
    },
    {
      id:8,
      foodName:"kurti",
      foodDetails:"This product is true to size. Plese buy usual size.",
      foodprice:700,
      foodImg:"https://rukminim2.flixcart.com/image/832/832/l2z26q80/kurta/q/2/5/m-fionaaqua-stylum-original-image7fypzzhuezq.jpeg?q=70"

    },
    {
      id:9,
      foodName:"Western Top",
      foodDetails:"amazing color",
      foodprice:500,
      foodImg:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7mhtvnzKS19PV27hnDTHrDNYTvGzYE5cGjuaEqUA-Lj76DaBgxKZDLP7RSjij4UMLH-HJBj6CRoqecuiDihMgzGwXyTIl1ehFEzq-BWyRZ87R0oXiuUh_oA"


    },
    
  ]


  

}