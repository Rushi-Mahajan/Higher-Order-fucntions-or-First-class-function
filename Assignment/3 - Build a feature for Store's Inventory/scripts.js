/*3. Build a feature for Store's Inventory.

Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
use the map higher-order function to create a new object with the converted prices in Rupees.*/

let listOfItem=["Handwash","Soap","Bedsheet","Laptop","Phone","PC","bed","chargers"]
let priceOfIteminUSD=[200,300,400,600,20,800,300,400]
store=new Object()

store.items=listOfItem
store.pricesofitem=priceOfIteminUSD

function convertPriceUSDToINR(store){
    priceofitemusd=store.pricesofitem
    storeINR=new Object
    priceOfIteminINR=[]

    priceofitemusd.forEach(element => {
        priceOfIteminINR.push(element*80)
    });
    storeINR.items=store.items
    storeINR.pricesofitem=priceOfIteminINR

    console.log(storeINR)
}
convertPriceUSDToINR(store)