function option(){
    let stores = [
        {
            id:1,
            name:"Milk",
            count:1
        },
        {
            id:2,
            name:"Yakult",
            count:100
        },
        {
            id:3,
            name:"Butter",
            count:100
        }
    ];
    let carts = [];
    while(true){
        console.log("=========================== MENU ============================");
        console.log("C. Thêm sản phẩm vào giỏ hàng.");
        console.log("R. In ra sản phẩm có trong cửa hàng và giỏ hàng.");
        console.log("U. Cập nhật số lượng sản phẩm có trong giỏ hàng");
        console.log("D. Xóa sản phẩm có trong giỏ hàng");
        console.log("E. Thoát chương trình.");
        console.log("=========================== MENU ============================");
        let action = prompt("Nhập vào C/R/U/D (E to exit): ").toUpperCase().trim();
        switch (action) {
            case "C":
                addToCart(stores,carts);
                break;
            case "R":
                displayItemInStores(stores);
                displayItemInCarts(carts);
                break;
            case "U":
                updateCart(stores,carts);
                break;
            case "D":
                deleteItemInCarts(stores, carts);
                break;
            case "E":
                alert("Cảm ơn bạn đã đến với Rikei Stores");
                return;
        }
    }
}
function displayItemInStores(stores){
    console.log("   ");
    console.log("==================== Các sản phẩm trong cửa hàng ====================");
    console.log("   ");
    if(stores.length!==0){
        for (let index = 0; index < stores.length; index++) {
            console.log(stores[index]);
        }
    }else{
        console.log("Hiện tại cửa hàng không có sản phẩm !!");
    }
    console.log("   ");
}
function displayItemInCarts(carts){
    console.log("   ");
    console.log("==================== Các sản phẩm trong giỏ hàng ====================");
    console.log("   ");
    if(carts.length!==0){
        for (let index = 0; index < carts.length; index++) {
            console.log(carts[index]);
        }
    }else{
        console.log("Hiện tại giỏ hàng không có sản phẩm !!");
    }
    console.log("   ");
}
function addToCart(stores,carts){
    if(stores.length == 0){
        displayItemInStores(stores);
        return;
    }
    displayItemInStores(stores);
    let k = carts.length;
    let flag = false;
    let itemToBuy = prompt("Nhập vào tên của sản phẩm muốn mua: ").trim();
    for (let index = 0; index < stores.length; index++) {
        if(stores[index].name.toUpperCase()==itemToBuy.toUpperCase()){
                if(k==0){
                    carts[k]={...stores[index]};
                    carts[k].count=1;
                    stores[index].count--;
                    if(stores[index].count==0){
                        stores.splice(index,1);
                    }
                    console.log("Thêm vào giỏ hàng thành công !!");
                }else{
                    for (let i = 0; i < carts.length; i++) {
                        if(carts[i].name.toUpperCase()==stores[index].name.toUpperCase()){
                            carts[i].count++;
                            stores[index].count--;
                            if(stores[index].count==0){
                                stores.splice(index,1);
                            }
                            break;
                        }else if(i==carts.length-1){
                            carts[k] = {...stores[index]};
                            carts[k].count = 1;      
                            stores[index].count--;
                            if(stores[index].count==0){
                                stores.splice(index,1);
                            }
                            console.log("Thêm vào giỏ hàng thành công !!");
                            break;
                        }
                    }
                }      
            flag = true;     
            break;
        }
    }
    if(flag == false){
        console.log("Sản phẩm không tồn tại trong cửa hàng !!");
    }
    displayItemInCarts(carts);
}

function updateCart(stores, carts){
    if(carts.length == 0){
        displayItemInCarts(carts);
        return;
    }
    displayItemInCarts(carts);
    let countUpdate;
    let flag = false;
    let choice = prompt("Nhập vị trí cập nhật trong giỏ hàng: ");
    while(choice>carts.length || choice<=0){
        choice = prompt(`Hãy nhập vị trí cập nhật trong giỏ hàng (trong khoảng 1 đến ${carts.length})`);
    }
    if(carts[choice-1]){
        countUpdate = Number(prompt(`Nhập vào số lượng của sản phẩm ${carts[choice-1].name} muốn thay đổi trong giỏ hàng: `));
        while(isNaN(countUpdate)){
            countUpdate = Number(prompt(`Hãy nhập vào số lượng của sản phẩm ${carts[choice-1].name} muốn thay đổi trong giỏ hàng: `));
        }
        for (let index = 0; index < stores.length; index++) {
            if(carts[choice-1].name == stores[index].name){
                if(countUpdate>stores[index].count){
                    flag = true;
                    console.log(`Số lượng sản phẩm cập nhật của ${stores[index].name} vượt quá số lượng sản phẩm hiện tại trong cửa hàng`);    
                    return;
                }else{
                    stores[index].count += carts[choice-1].count;
                    carts[choice-1].count = countUpdate;
                    stores[index].count -= countUpdate;
                    if(carts[choice-1].count == 0){
                        carts.splice(choice-1,1);
                    }else if(stores[index] == 0){
                        stores.splice(index,1);
                    }
                    flag = true;
                    console.log(`Cập nhật số lượng sản phẩm ${carts[choice-1].name} trong giỏ hàng thành công !!`);
                    break;
                }
            }
        }
        if(flag == false){
            console.log(`Cửa hàng đã bán hết sản phẩm ${carts[choice-1].name}`);
        }
    }
    displayItemInStores(stores);
    displayItemInCarts(carts);
}

function deleteItemInCarts (stores, carts){
    if(carts.length == 0){
        displayItemInCarts(carts);
        return;
    }
    displayItemInCarts(carts);
    let flag = false;
    let choice = prompt("Nhập vị trí sản phẩm muốn xóa trong giỏ hàng: ");
    while(choice>carts.length || choice<=0){
        choice = prompt(`Hãy nhập vị trí sản phẩm muốn xóa trong giỏ hàng (trong khoảng 1 đến ${carts.length})`);
    }
    let nameProduct = carts[choice-1].name;
    for (let index = 0; index < stores.length; index++) {
        if(carts[choice-1].name == stores[index].name){
            stores[index].count += carts[choice-1].count;
            carts.splice(choice-1,1);
            console.log(`Xóa sản phẩm ${nameProduct} trong giỏ hàng thành công !!`);4
            flag = true;
            break;
        }
    }
    if(flag == false){
        stores[stores.length] = {...carts[choice-1]};
        carts.splice(choice-1,1);
        console.log(`Xóa sản phẩm ${nameProduct} trong giỏ hàng thành công !!`);
    }
    displayItemInStores(stores);
    displayItemInCarts(carts);
}
option();