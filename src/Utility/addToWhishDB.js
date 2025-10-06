const getStoredWhishList = () => {
    const storedBookSTR = localStorage.getItem("WhishList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
};
const addToStoredWishListDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("This Book already exixt WhishList");
    } else {
        storedBookData.push(id);
        // console.log(storedBookData)
        const Data = JSON.stringify(storedBookData);
        localStorage.setItem("WhishList", Data)
    }
}
export { addToStoredWishListDB, getStoredWhishList };