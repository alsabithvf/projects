let products=[
    {id:1, name:"laptop", category:"Electronics", price:50000},
    {id:2, name:"Sneakers", category:"Fashion", price:3000},
    {id:3, name:"Mobile", category:"Electronics", price:30000},
    {id:4, name:"Baggypants",category:"Fashion", price:1500}
]

let withGst=products.map(p=> ({
    ...p, gstprice:(p.price*1.18).toFixed(2)
}));

let electronic= products.filter(p=>p.category=="Electronics");
console.log("Sorted Electronics:");
console.log(electronic);
let fashion= products.filter(p=>p.category=="Fashion");
console.log("Sorted Fashion:");
console.log(fashion);

let pricesortlh=products.sort((a,b)=>a.price-b.price);
console.log("Price Sorted (Low-High):");
console.log(pricesortlh);

let pricesorthl=products.sort((a,b)=>b.price-a.price);
console.log("Price Sorted (High-Low):");
console.log(pricesorthl);

let pricefilter=products.filter(p=>p.price<=25000);
console.log("Products Sorted(under 25000):");
console.log(pricefilter);

let namesort=products.sort((a,b)=>a.name.localeCompare(b.name));
console.log("Products Sorted Using Name(Alphabetic Order):");
console.log(namesort);

console.log("Products After Adding GST:");
console.log(withGst);

