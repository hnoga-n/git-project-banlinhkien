// mảng sản phẩm
const productInLocalStorage = localStorage.getItem("product");
let product;
if(productInLocalStorage != null) // kiểm tra xem localstore có mảng product chưa
{
  product = JSON.parse(localStorage.getItem("product"));
  // fix loi khong load dc product sau khi add items...
  //localStorage.clear;
}
else
{
  product = [
  {
    id: "1",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699000",
    description: "Keyboard for gamer",
    img: "/assets/img/ban-phim-co-dareu-a98-rgb-04-400x400.jpg",
  },
  {
    id: "2",
    type: "mouse",
    name: "Chuột Gaming Yindiao A5",
    description: "Bluetooth/Wireless,pin Sạc E-sports, Led RBG 7 màu - Chính Hãng",
    img: "/assets/img/ChuộtGamingYindiaoA5.webp",
    price: "269000",
  },
  {
    id: "3",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
  {
    id: "4",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "5",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "6",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "7",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "8",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "9",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699000",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
  },
  {
    id: "10",
    type: "mouse",
    name: "Chuột gaming không dây DARE-U RGB",
    description: "Độ trễ thấp, phạm vi hoạt động hiệu quả 10m không vật cản",
    img: "/assets/img/Chuột gaming không dây DARE-U RGB.webp",
    price: "719000",
  },
  {
    id: "11",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
  {
    id: "12",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "13",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "14",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "15",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "16",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "17",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
  {
    id: "18",
    type: "mouse",
    name: "Chuột gaming Newmen G11 ",
    description: "Bi trọng lực tích hợp giúp chuột định vị chính xác trong game",
    img: "/assets/img/Chuột gaming Newmen G11.webp",
    price: "179000",
  },
  {
    id: "19",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
  {
    id: "20",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "21",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "22",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "23",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "24",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "25",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699000",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
  },
  {
    id: "26",
    type: "mouse",
    name: "Chuột gaming Logitech G502 HERO",
    description: "Cảm biến: HERO ,độ phân giải: 16000 DPI",
    img: "/assets/img/Chuột gaming Logitech G502 HERO.webp",
    price: "999000",
  },
  {
    id: "27",
    type: "keyboard",
    name: "ban phim nhu con cac",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
  {
    id: "28",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/assets/img/mousepads.png",
    price: "169000",
  },
  {
    id: "29",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/assets/img/speaker.png",
    price: "569000",
  },
  {
    id: "30",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/assets/img/mousepads.png",
    price: "569000",
  },
  {
    id: "31",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "32",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/assets/img/headphone.png",
    price: "569000",
  },
  {
    id: "33",
    type: "keyboard",
    name: "ban phim du ma js nhu l",
    description: "Keyboard for gamer",
    img: "/assets/img/keyboard.jpg",
    price: "699000",
  },
];
localStorage.setItem("product",JSON.stringify(product));
}
