# Function 
-  Là một hàm, giúp gói gọn code logic lại thực thi 1 tác vụ cụ thể giúp code gọn gàng, có tính tái sử dụng
- Các loại function, cách dùng:
+ declaration: function bình thường.
cú pháp: function tenHam (){
    //thân hàm nơi viết logic xử lý
}
+ arrow function - hàm mũi tên.
cú pháp: let result=()=>{
    // thân hàm nơi thực thi logic
}
- Lưu ý: 
+ đặt tên hàm có ý nghĩa và viết theo quy tắc camel case. 
+ muốn hàm được thực thi phải gọi hàm (đối với arrow function, expression function phải gọi sau khai báo, không được gọi trước khi khai báo).
+ function bình thường có hoisting nên có thể gọi trước khi khai báo hoặc sau khi khai báo đều được.
+ nếu có 2 function tên giống nhau cùng tham số hàm sau sẽ ghi đè hàm trước.
+ ngoài 2 hàm chính còn hàm expression function, IIFE (invoke immediately function expression).
+ iife function thường dùng làm thư viện.
+ ${} literal template string
# Arrow khác function thường như nào:
+ cú pháp.
+ phải gọi sau khi khai báo.
+ arrow không có context (this).
+ arrow không có argument (đối tượng argument nó sẽ lấy hết các đối số truyền vào).
+ arrow không tạo hàm tạo constructor được.
# Tham số (params), đối số (argument)
- Tham số là giá trị nhận vào, đối số là giá trị truyền vào giúp cho tái sử dụng code.
- return trong hàm:
+ kết thúc việc xử lý hàm.
+ kết quả trả về của hàm.
+ hàm sẽ không chạy code sau return.
+ nếu hàm chỉ return thì sẽ kết quả return sẽ là undefined.
+ khi hàm khác cần kết quả trả về của hàm hiện tại thì sẽ phải return.
# Đệ quy
- là hàm tự gọi lại chính nó.
- dùng để giải quyết các vấn đề có tính lặp lại một nhiệm vụ đến khi đạt được điều kiện thỏa mãn.
# Callback
- là hàm dùng để truyền tham số của hàm khác.
- dùng để xử lý các tác vụ bất đồng bộ.
- setTimeout: là 1 phương thức trong js, dùng để đặt thời gian chờ cho hàm thực thi.