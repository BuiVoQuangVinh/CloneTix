// /* Truncate Card Title */
// window.addEventListener("load", function () {
//     //sau trang wed load xong các thẻ html, css và thư viện animation thì bắt đầu xử lý thu gọn đoạn văn bản
//     // truncateCardTitle();
//     truncateTitle();
//     truncaseDiscription();
//     truncateCardTitle("news__descriptionBottomPa",160); 
    
//   });
  
//   function truncateCardTitle(classX,numb) {
//     //Tìm đến các thẻ chứa class là card-title
//     var cardList = document.getElementsByClassName(classX);
//     // console.log(cardList);
//     //Duyệt từng thẻ html tìm được
//     for (var i = 0; i < cardList.length; i++) {
//       //lấy nội dung của thẻ
//       var text = cardList[i].innerHTML;
//       // thu gọn nội dung thẻ, làm ngắn lại đúng số chữ mình quy đinh
//       //Code bên dưới đang thu gọn đoạn văn bản xuống 14 ký tự
//       var newText = truncateString(text, numb);
//       cardList[i].innerHTML = newText;
//     }
//   }

//   function truncateTitle() {
//     //Tìm đến các thẻ chứa class là card-title
//     var cardList = document.getElementsByClassName("news__bottomList-truncase");
//     // console.log(cardList);
//     //Duyệt từng thẻ html tìm được
//     for (var i = 0; i < cardList.length; i++) {
//       //lấy nội dung của thẻ
//       var text = cardList[i].innerHTML;
//       // thu gọn nội dung thẻ, làm ngắn lại đúng số chữ mình quy đinh
//       //Code bên dưới đang thu gọn đoạn văn bản xuống 14 ký tự
//       var newText = truncateString2(text,87);
//       cardList[i].innerHTML = newText;
//     }
//   }

//   function truncaseDiscription() {
//     //Tìm đến các thẻ chứa class là card-title
//     var cardList = document.getElementsByClassName("news__descriptionPa");
//     // console.log(cardList);
//     //Duyệt từng thẻ html tìm được
//     for (var i = 0; i < cardList.length; i++) {
//       //lấy nội dung của thẻ
//       var text = cardList[i].innerHTML;
//       // thu gọn nội dung thẻ, làm ngắn lại đúng số chữ mình quy đinh
//       //Code bên dưới đang thu gọn đoạn văn bản xuống 14 ký tự
//       var newText = truncateString(text, 272);
//       cardList[i].innerHTML = newText;
//     }
//   }
  

//   function truncateString(str, num) {
//     // Nếu đoạn văn bản dài hơn số ký tự quy đinh, thì rút gọn và thêm dấu "..." cho phần đoạn chữ dài hơn số ký tự quy định
//     if (str.length > num) {
//       return str.slice(0, num) ;
//     } else {
//       //nếu đoạn văn bản không vượt quá số ký tự quy định thì không cần rút gọn
//       return str;
//     }
//   }

//   function truncateString2(str, num) {
//     // Nếu đoạn văn bản dài hơn số ký tự quy đinh, thì rút gọn và thêm dấu "..." cho phần đoạn chữ dài hơn số ký tự quy định
//     if (str.length > num) {
//       return str.slice(0, num) +'...';
//     } else {
//       //nếu đoạn văn bản không vượt quá số ký tự quy định thì không cần rút gọn
//       return str;
//     }
//   }



//   function layKichThuocManHinh(){
//     console.log(screen.width);
//     return screen.width;
//   }

//   window.addEventListener("resize",function(){
//     var soLuong = layKichThuocManHinh();

//     truncateCardTitle("news__descriptionBottomPa",(soLuong/20));
//   })
  