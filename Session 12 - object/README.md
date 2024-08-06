# Object - Đối tượng
- gồm có: 
+ thuộc tính (properties).
+ phương thức (method).
vd: còn mèo có các thuộc tính màu lông, cân nặng,...; và phương thức chạy, nhảy,...
- 4 tính chất OOP (object oriented programming: lập trình hướng đối tượng):
+ đóng gói (encapsulation).
+ kế thừa (inheritance).
+ đa hình (abstraction).
+ trừu tượng (polymorphism).
- Cách khởi tạo đối tượng:
+ dùng từ khóa new Object();
+ let, const, var tên đối tượng = {}.
+ dùng hàm tạo constructor.
+ dùng class.
const student = {};
CRUD: với đối tượng
- Để thêm thuộc tính cho đối tượng: (C)
+ C1: đối tượng.thuộc tính = "giá trị".
+ C2: đối tượng["tên thuộc tính"] = "giá trị".
- (R):
+ dùng for in để duyệt => trả về các key (thuộc tính)
+ in giá trị thuộc tính: đối tượng [key]
- (U):
+ đối tượng.thuộc tính = giá trị mới.
- (D):
+ delete đối tượng.thuộc tính.