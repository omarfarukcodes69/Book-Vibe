const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
};
const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("This Book already Read");
    } else {
        storedBookData.push(id);
        // console.log(storedBookData)
        const Data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", Data)
    }
}
export { addToStoredDB,getStoredBook };