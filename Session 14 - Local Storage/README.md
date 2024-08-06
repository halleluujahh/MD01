# Local Storage
- dịch vụ của trình duyệt cung cấp cho phép mình lưu trữ dữ liệu.
- dung lượng lưu trữ tầm 5MB.
- cách lưu trữ: localStorage.setItem(key, value).
+ đối với mảng và object khi lưu phải chuyển sang định dạng JSON.
- cách lấy về: localStorage.getItem(tên key).
- cách xóa: 
+ xóa 1 key,value: localStorage.removeItem(tên key).
+ xóa hết: localStorage.clear();
- Lưu ý:
+ khi lưu xong dữ liệu sẽ không bị mất đi (tắt máy hoặc trình duyệt dữ liệu vẫn còn). 
