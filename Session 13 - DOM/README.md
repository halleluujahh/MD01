# DOM: Document Object Model
- mô hình tài liệu dạng đối tượng.
- DOM tạo ra khi nào:
+ Khi trang web được tải lên thì trình duyệt sẽ tạo ra mô hình DOM. Từ mô hình DOM có thể: thay đổi nội dung text, màu sắc, hiệu ứng, các attribute, element, ...
- Các thành phần trong DOM:
+ element: tên các thẻ tag trong html. Các cách để lấy element trong DOM:
1. lấy theo tên thẻ: document.getElementsByTagName("tên thẻ")[vị trí]. Kết quả trả về: HTML collection dạng mảng [].
2. lấy theo id (id: định danh cho element, phải là duy nhất): document.getElementById("tên id"). Kết quả trả về là đối tượng (element).
3. lấy theo class: document.getElementsByClassName("tên class")[vị trí]. Kết quả trả về: HTML collection dạng mảng [].
4. query selector (bộ chọn css): document.querySelector(".query"). Kết quả trả về là một đối tượng (element).
5. querySelectorAll: document.querySelectorAll. Kết quả trả về là 1 nodelist dạng mảng.
+ Chú ý: nếu không có element nào thỏa mãn trả về null.

+ attribute: tên thuộc tính (class, href, src, target, id):
1. setAttribute(attribute, value).
2. getAttribute(attribute).
3. classList: trả về danh sách class. Cung cấp các phương thức: add (thêm class), remove (xóa class), contains (kiểm tra xem có class đó không trả về true hoặc false), toggle (công tắc: có thì xóa đi, không có thì thêm vào).

+ text: phần content:
1. textContent
2. innerHTML
3. innerText

# Even
- Là những sự kiện mà người dùng tương tác (click chuột, bàn phìm (enter), mũi tên lên xuống, trái phải, sự kiện nhập ô input, scroll).
- Những sự kiện cơ bản:
+ onchange(`function`): khi bỏ con trỏ chuột ra khỏi element thì sự kiện onchange sẽ chạy.
+ oninput(`function`): khi nhập từng kí tự vào input thì element sự kiện oninput sẽ chạy.