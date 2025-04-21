
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }

}


const addToStoredDB = (id) => {
    const storedBookData = getStoredBook()

    if(storedBookData.includes(id)){
        alert('This book is already marked!');
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
    }
}


export {addToStoredDB, getStoredBook};



const getStoredWishBook = () => {
    const storedBookSTR = localStorage.getItem("WishList");

    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }

}


const addToStoredWishDB = (id) => {
    const storedBookData = getStoredWishBook()

    if(storedBookData.includes(id)){
        alert('This book is in Wish List!');
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("WishList", data)
    }
}


export {addToStoredWishDB, getStoredWishBook};