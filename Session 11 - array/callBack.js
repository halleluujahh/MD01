let sdt;
function xinSdt(callback){
    console.log("Hiệp gọi cho Minh xin số Hoa");
    console.log("Minh bảo đợi chút để tìm số Hoa");
    setTimeout(()=>{
        console.log("Minh đã tìm thấy số của Hoa");
        sdt = 123456;
        callback(sdt);
    }, 3000);
}

function goiKhiCoSoDienThoai(number){
    console.log(`Hiệp gọi cho Hoa theo số ${number}`);
}

xinSdt(goiKhiCoSoDienThoai);