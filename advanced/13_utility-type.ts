// Partial, Pick, Omit

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// 특정 상품의 상세정보를 나타내기 위한 함수
// 1. Pick<> : 기존에 정의된 타입 내의 특정 속성만 가져와서 사용
type ShoppingItem = Pick<Product, 'id'|'name'|'price'>;
function displayProductDetail(shoppingItem:ShoppingItem){}

// 2. Omit<> : 기존에 정의된 타입 내의 특정 속성만 제외해서 사용
type CartItem = Omit<Product, 'name'>;
function displayCartDetail(cartItem:CartItem){}

// 특정 상품의 정보를 갱신하는 함수
// 3. Partial<> : 기존에 정의된 타입 내의 몇몇 속성만 가져와서 사용(선택적)
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem:UpdateProduct){}


// 유틸리티 타입 구현하기(펼쳐보기)
interface UserProfile{
    username:string;
    email:string;
    profilePhotoUrl:string;
}

// #1
type UserProfileUpdate = {
    username?:UserProfile['username'];
    email?:UserProfile['email'];
    profilePhotoUrl?:UserProfile['profilePhotoUrl'];
}

// #2
type UserProfileUpdate2 = {
    [p in 'username'|'email'|'profilePhotoUrl']?:UserProfileUpdate[p]
}

// #3
type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T>={
    [p in keyof T]?:T[p]
}

