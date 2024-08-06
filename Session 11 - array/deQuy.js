/* tính tổng từ 1 - 10 đệ quy */
function deQuy(a){
    if(a==1){
        return 1;
    }
    return a + deQuy(--a);
}
deQuy(10);