// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất


function getStringHasMaxLength(arr){
    let doDaiLonNhat = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        const doDaiChuoi = arr[i].length;
        if (doDaiChuoi > doDaiLonNhat) {
            doDaiLonNhat = doDaiChuoi;
        }
    }
    const arrMax = arr.filter(e => e.length === doDaiLonNhat);
    return arrMax;
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'caaaaaa', 'vcd']))



// Bài 2. Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function searchUser (arrUser){
    arrUser.forEach(element => {
        if(element.age>25 && element.isStatus === true){
            console.log(element)
        }
    });
}
searchUser(users);
// // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sortUsers (arr){
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[i].age > arr[j].age){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}
sortUsers(users);


// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần


function getCountElement(arr){
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        const elemnet = arr[i];
        count[elemnet] = (count[elemnet] || 0) + 1;
    }

    return count;
}
console.log(getCountElement(["bb", "bb", "bb", "cc", "aa", "aa"]));






