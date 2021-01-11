import DiscountPoster1 from '../../Assets/Images/Posters/Discounts02.jpg';
import DiscountPoster2 from '../../Assets/Images/Posters/Discounts03.jpg';
import DiscountPoster3 from '../../Assets/Images/Posters/DiscountPoster3.png';
import DiscountPoster4 from '../../Assets/Images/Posters/Discounts04.jpg';

const initialState = {
    aDiscounts: [
        {
            img: DiscountPoster1,
            discount: "Electronics"
        }, {
            img: DiscountPoster2,
            discount: "Home Appliances"
        }, {
            img: DiscountPoster3,
            discount: "Clothes"
        }, {
            img: DiscountPoster4,
            discount: "Furnitures"
        }
    ],

    aProductRoutes: [
        {
            "routeName": "Electronics",
            "key": "Electronics",
        }, {
            "routeName": "Tv's & Appliances",
            "key": "Appliances"
        }, {
            "routeName": "Men",
            "key": "Men"
        }, {
            "routeName": "Women",
            "key": "Women"
        }, {
            "routeName": "Home and Furnitures",
            "key": "HomeFurnitures"
        }
    ],

    aAllProducts: [
        {
            title: "Electronics",
            aProductDetails: [
                {
                    title: "Mobile",
                    aProducts: [{
                        name: "Motorola",
                        version: "One action",
                        rating: "4.5",
                        price: "10,999",
                        bWishList: false,
                        id: "1"
                    }, {
                        name: "Samsung",
                        version: "A30",
                        rating: "4.5",
                        price: "13,999",
                        bWishList: false,
                        id: "2"
                    }, {
                        name: "iPhone",
                        version: "12 mini",
                        rating: "4.5",
                        price: "58,999",
                        bWishList: false,
                        id: "3"
                    }, {
                        name: "Nokia",
                        version: "5.1",
                        rating: "4.5",
                        price: "12,999",
                        bWishList: false,
                        id: "4"
                    }]
                },
                {
                    title: "Laptop",
                    aProducts: [{
                        name: "Azus",
                        version: "Azus Notebook 15",
                        rating: "4.5",
                        price: "64,999",
                        bWishList: false,
                        id: "11"
                    }, {
                        name: "Apple",
                        version: "Mac Book Pro",
                        rating: "4.5",
                        price: "1,13,999",
                        bWishList: false,
                        id: "12"
                    }, {
                        name: "Lenovo",
                        version: "ThinkPad",
                        rating: "4.5",
                        price: "58,999",
                        bWishList: false,
                        id: "13"
                    }, {
                        name: "Dell",
                        version: "Dell Notebook",
                        rating: "4.5",
                        price: "72,999",
                        bWishList: false,
                        id: "14"
                    }]
                },
                {
                    title: "Smart Watch",
                    aProducts: [{
                        name: "Samsung",
                        version: "Smart Watch",
                        rating: "4.5",
                        price: "24,999",
                        bWishList: false,
                        id: "21"
                    }, {
                        name: "Apple",
                        version: "iWatch",
                        rating: "4.5",
                        price: "1,13,999",
                        bWishList: false,
                        id: "22"
                    }, {
                        name: "RealMe",
                        version: "Smart Watch",
                        rating: "4.5",
                        price: "8,999",
                        bWishList: false,
                        id: "23"
                    }]
                }
            ]
        },
        {
            title: "Appliances",
            aProductDetails: [
                {
                    title: "Tv's",
                    aProducts: [{
                        name: "Motorola(32inch)",
                        version: "HD Ready LED Smart Android",
                        rating: "4.5",
                        price: "15,999",
                        bWishList: false,
                        id: "31"
                    }, {
                        name: "Kodak(32inch)",
                        version: "HD Ready LED Smart Android",
                        rating: "4.5",
                        price: "12,999",
                        bWishList: false,
                        id: "32"
                    }, {
                        name: "Samsung(32inch)",
                        version: "HD Ready LED Smart Android",
                        rating: "4.5",
                        price: "16,999",
                        bWishList: false,
                        id: "33"
                    }, {
                        name: "Coocaa(32inch)",
                        version: "HD Ready LED Smart Android",
                        rating: "4.5",
                        price: "11,999",
                        bWishList: false,
                        id: "34"
                    }]
                },
                {
                    title: "Kitchen Appliances",
                    aProducts: [{
                        name: "Butterfly",
                        version: "MIxer Grinder",
                        rating: "4.5",
                        price: "4,999",
                        bWishList: false,
                        id: "41"
                    }, {
                        name: "MarQ",
                        version: "Oven Toaster",
                        rating: "4.5",
                        price: "3,999",
                        bWishList: false,
                        id: "42"
                    }, {
                        name: "Induction Cooktops",
                        version: "Philips",
                        rating: "4.5",
                        price: "2,999",
                        bWishList: false,
                        id: "43"
                    }, {
                        name: "Electric Kettles",
                        version: "Pigeon",
                        rating: "4.5",
                        price: "999",
                        bWishList: false,
                        id: "44"
                    }]
                },
                {
                    title: "Refrigerators",
                    aProducts: [{
                        name: "Single Door",
                        version: "LG 190L",
                        rating: "4.5",
                        price: "16,999",
                        bWishList: false,
                        id: "51"
                    }, {
                        name: "Convertible",
                        version: "LG 260L",
                        rating: "4.5",
                        price: "33,999",
                        bWishList: false,
                        id: "52"
                    }, {
                        name: "Mini Frige",
                        version: "MarQ 170L",
                        rating: "4.5",
                        price: "8,999",
                        bWishList: false,
                        id: "53"
                    }]
                }
            ]
        },
        {
            title: "Men",
            aProductDetails: [
                {
                    title: "Footware",
                    aProducts: [{
                        name: "Campus",
                        version: "Running Shoes",
                        rating: "4.5",
                        price: "2099",
                        bWishList: false,
                        id: "61"
                    }, {
                        name: "Port",
                        version: "Casual",
                        rating: "4.5",
                        price: "3999",
                        bWishList: false,
                        id: "62"
                    }, {
                        name: "Chevit",
                        version: "Combo Casual",
                        rating: "4.5",
                        price: "999",
                        bWishList: false,
                        id: "63"
                    }, {
                        name: "Shoes Bank",
                        version: "Sneakers",
                        rating: "4.5",
                        price: "599",
                        bWishList: false,
                        id: "64"
                    }]
                },
                {
                    title: "Clothing",
                    aProducts: [{
                        name: "Peter England",
                        version: "Round Neck",
                        rating: "4.5",
                        price: "999",
                        bWishList: false,
                        id: "65"
                    }, {
                        name: "Tripr",
                        version: "Hoodey",
                        rating: "4.5",
                        price: "499",
                        bWishList: false,
                        id: "66"
                    }, {
                        name: "Bezal",
                        version: "Black Slouchy",
                        rating: "4.5",
                        price: "199",
                        bWishList: false,
                        id: "67"
                    }, {
                        name: "Helmont",
                        version: "Hooded",
                        rating: "4.5",
                        price: "399",
                        bWishList: false,
                        id: "68"
                    }]
                },
                {
                    title: "Ethnic Wear",
                    aProducts: [{
                        name: "Peter England",
                        version: "Kurta",
                        rating: "4.5",
                        price: "839",
                        bWishList: false,
                        id: "69"
                    }, {
                        name: "Prakasam",
                        version: "Dhoti",
                        rating: "4.5",
                        price: "499",
                        bWishList: false,
                        id: "70"
                    }, {
                        name: "Allan Peter",
                        version: "Kurta",
                        rating: "4.5",
                        price: "699",
                        bWishList: false,
                        id: "71"
                    }]
                }
            ]
        },
        {
            title: "Women",
            aProductDetails: [
                {
                    title: "Footware",
                    aProducts: [{
                        name: "Puma",
                        version: "Running Shoes",
                        rating: "4.5",
                        price: "2099",
                        bWishList: false,
                        id: "72"
                    }, {
                        name: "Mochi",
                        version: "Flats",
                        rating: "4.5",
                        price: "3999",
                        bWishList: false,
                        id: "73"
                    }, {
                        name: "Twin Toes",
                        version: "Wedges",
                        rating: "4.5",
                        price: "999",
                        bWishList: false,
                        id: "74"
                    }, {
                        name: "Shoes Bank",
                        version: "Sneakers",
                        rating: "4.5",
                        price: "599",
                        bWishList: false,
                        id: "75"
                    }]
                },
                {
                    title: "Clothing",
                    aProducts: [{
                        name: "Libas",
                        version: "Straight Kurta",
                        rating: "4.5",
                        price: "999",
                        bWishList: false,
                        id: "76"
                    }, {
                        name: "Saara",
                        version: "Saree",
                        rating: "4.5",
                        price: "699",
                        bWishList: false,
                        id: "77"
                    }, {
                        name: "The Dry State",
                        version: "Full Sleeve",
                        rating: "4.5",
                        price: "199",
                        bWishList: false,
                        id: "78"
                    }, {
                        name: "Cartyshop",
                        version: "A-Line Kurta",
                        rating: "4.5",
                        price: "399",
                        bWishList: false,
                        id: "79"
                    }]
                },
                {
                    title: "Jewellery",
                    aProducts: [{
                        name: "Sukkhi",
                        version: "Alloy Jewel",
                        rating: "4.5",
                        price: "411",
                        bWishList: false,
                        id: "81"
                    }, {
                        name: "Weldecor",
                        version: "Pendant",
                        rating: "4.5",
                        price: "164",
                        bWishList: false,
                        id: "82"
                    }, {
                        name: "Zeneme",
                        version: "Earing",
                        rating: "4.5",
                        price: "699",
                        bWishList: false,
                        id: "83"
                    }]
                }
            ]
        },
        {
            title: "HomeFurnitures",
            aProductDetails: [
                {
                    title: "Home Lighting",
                    aProducts: [{
                        name: "Halonix",
                        version: "White, Pack of 2",
                        rating: "4.5",
                        price: "423",
                        bWishList: false,
                        id: "84"
                    }, {
                        name: "Pigeon",
                        version: "Emergency Light",
                        rating: "4.5",
                        price: "300",
                        bWishList: false,
                        id: "85"
                    }, {
                        name: "Everyday",
                        version: "Tourch",
                        rating: "4.5",
                        price: "199",
                        bWishList: false,
                        id: "86"
                    }, {
                        name: "Tubelight",
                        version: "Bright",
                        rating: "4.5",
                        price: "689",
                        bWishList: false,
                        id: "87"
                    }]
                },
                {
                    title: "Office Furniture",
                    aProducts: [{
                        name: "Portronics",
                        version: "Finish Color - Grey",
                        rating: "4.5",
                        price: "1999",
                        bWishList: false,
                        id: "88"
                    }, {
                        name: "Acnos",
                        version: "Finish Color - Black",
                        rating: "4.5",
                        price: "599",
                        bWishList: false,
                        id: "89"
                    }, {
                        name: "Karmax",
                        version: "Finish Color - Black Brushed",
                        rating: "4.5",
                        price: "899",
                        bWishList: false,
                        id: "90"
                    }, {
                        name: "Furn",
                        version: "Finish Color - Wooden Beige",
                        rating: "4.5",
                        price: "1399",
                        bWishList: false,
                        id: "91"
                    }]
                },
                {
                    title: "Smart Home Automation",
                    aProducts: [{
                        name: "Philips",
                        version: "Smart Light",
                        rating: "4.5",
                        price: "799",
                        bWishList: false,
                        id: "92"
                    }, {
                        name: "Apple",
                        version: "Smart Plugs",
                        rating: "4.5",
                        price: "7999",
                        bWishList: false,
                        id: "93"
                    }, {
                        name: "Emotix",
                        version: "Smart Assistants",
                        rating: "4.5",
                        price: "28,999",
                        bWishList: false,
                        id: "94"
                    }]
                }
            ]
        },
    ],

    aCartItems: [],
    aWishItems: [],
    aViewProduct: [],
    iTotalAmt: 0
};

//function to get the active routeSection
const fnGetKeyHelper = (oState, sProductType) => {
    const oKey = oState.aProductRoutes.find((oRoute) => {
        return oRoute.routeName === sProductType;
    });
    return oKey;
};

//function to get selected Data from aAllProducts
const fnGetProductDataHelper = (oState, skey) => {
    const iProductData = oState.aAllProducts.findIndex((oProduct) => {
        return oProduct.title === skey;
    });
    const oProductData = oState.aAllProducts[iProductData];
    return {
        oProductData: oProductData,
        iAllProductIndex: iProductData
    };
};

//function to get Selected Product Data from clicked
const fnGetSelectItemHelper = (oProductData, sItemType) => {
    const iSelectedProd = oProductData.aProductDetails.findIndex((oCur) => {
        return oCur.title === sItemType;
    });
    const oSelectedProd = oProductData.aProductDetails[iSelectedProd];
    return {
        oSelectedProd: oSelectedProd,
        iSelectedIndex: iSelectedProd
    };
};

//function to set update aAllProducts
const fnSetUdpateValues = (oState, oProductData, oSelectedProd, iProdIndex) => {
    const aTempAllProducts = [...oState.aAllProducts];
    const oCategoryData = aTempAllProducts[oProductData.iAllProductIndex];
    const oCurrentProd = oCategoryData.aProductDetails[oSelectedProd.iSelectedIndex];
    oCurrentProd.aProducts[iProdIndex].bWishList = true;
    return aTempAllProducts;
};

//function to get selected category Data
const fnGetSelectedData = (bDetails, oTempItem, index) => {
    let oTempData = null;
    const aTemp = oTempItem.oSelectedProd.aProducts
    oTempData = aTemp[index];
    return oTempData;
};

//function to get index of selected Data from Details
const fnGetSelectedIndex = (oTemp, index) => {
    const aTempData = oTemp.oSelectedProd.aProducts
    const iIndex = aTempData.findIndex((oRow) => {
        return oRow.id === index;
    });
    return iIndex;
};

//function setData based on Details
const fnSetDataDetail = (bDetails, oItem, oPayload, oKey) => {
    let aDetails = [];
    if (bDetails) {
        let oTempData = {
            oData: oItem,
            sItemType: oPayload.sItemType,
            sProductType: oPayload.sProductType,
            sRouteKey: oKey.key
        }
        aDetails.push(oTempData);
    }
    return aDetails
};

const reducers = (state = initialState, action) => {
    const oCloneState = { ...state };
    const oPayload = { ...action.oPayload };
    let oTempState = {};
    let aViewProduct = [];
    let oTempData = {};
    let iProdIndex = "";
    const bDetails = oPayload.bDetails;
    let iTotalAmt = 0;
    switch (action.type) {
        case "ADDTOWISHLIST":
            const oTempKey = fnGetKeyHelper(oCloneState, oPayload.sProductType);
            const oTempProductData = fnGetProductDataHelper(oCloneState, oTempKey.key);
            const oTempSelectedProd = fnGetSelectItemHelper(oTempProductData.oProductData, oPayload.sItemType);
            iProdIndex = (bDetails) ? fnGetSelectedIndex(oTempSelectedProd, oPayload.index) : oPayload.index;
            const oTempItem = fnGetSelectedData(bDetails, oTempSelectedProd, iProdIndex);
            const aCloneWishList = [...oCloneState.aWishItems];
            oTempItem.bWishList = true;
            oTempItem.sProductType = oPayload.sProductType;
            oTempItem.sItemType = oPayload.sItemType;
            aCloneWishList.push(oTempItem);
            const aCloneAllProducts = fnSetUdpateValues(oCloneState, oTempProductData, oTempSelectedProd, iProdIndex);
            aViewProduct = fnSetDataDetail(bDetails, oTempItem, oPayload, oTempKey);
            oTempState = {
                ...state,
                aAllProducts: aCloneAllProducts,
                aWishItems: aCloneWishList,
                aViewProduct: aViewProduct
            }
            return oTempState;
        case "REMOVEFROMWISHLIST":
            return state;
        case "EMPTYWISHLIST":
            return state;
        case "ADDTOCART":
            let aCartItems = [...oCloneState.aCartItems];
            let iProductPrice = oPayload.oData.price;
            iProductPrice = iProductPrice.replace(",", "");
            iTotalAmt = oCloneState.iTotalAmt;
            let oCartItem = {
                ...oPayload.oData,
                Amount: Number(oPayload.Quantity) * Number(iProductPrice),
                Quantity: oPayload.Quantity,
            };
            iTotalAmt = Number(iTotalAmt) + Number(oCartItem.Amount);
            aCartItems.push(oCartItem);
            oTempState = {
                ...state,
                aCartItems: aCartItems,
                iTotalAmt: iTotalAmt
            }
            return oTempState;
        case "REMOVEFROMCART":
            let iIndex = action.id;
            let aTempCart = [...oCloneState.aCartItems];
            let iTotalAmt = oCloneState.iTotalAmt;
            iTotalAmt = Number(iTotalAmt) - Number(aTempCart[iIndex].Amount);
            aTempCart.splice(iIndex, 1);
            oTempState = {
                ...state,
                aCartItems: aTempCart,
                iTotalAmt: iTotalAmt
            }
            return oTempState;
        case "EMPTYCART":
            return state;
        case "VIEWPRODUCT":
            aViewProduct = [];
            const oKey = fnGetKeyHelper(oCloneState, oPayload.sProductType);
            oTempData = {
                oData: oPayload.oData,
                sItemType: oPayload.sItemType,
                sProductType: oPayload.sProductType,
                sRouteKey: oKey.key
            }
            aViewProduct.push(oTempData);
            oTempState = {
                ...state,
                aViewProduct: aViewProduct
            }
            return oTempState;
    }
    return state;
}

export default reducers;