let inventory = [
    {
        sku: "sku-001",
        name: "Dirt",
        price: 5.00,
        stock: 10
    },
    {
        sku: "sku-002",
        name: "Stone",
        price: 2.50,
        stock: 20
    },
    {
        sku: "sku-003",
        name: "Cobblestone",
        price: 1.00,
        stock: 40
    },
    {
        sku: "sku-004",
        name: "Oak Log",
        price: 10,
        stock: 25
    }
]
    newInventory = {
        sku: "sku-005",
        name: "Diamond",
        price: 100,
        stock: 5
    }
    inventory.push(newInventory)

/*I put the original literal after the push update because
 I could not figure out how to update console.log to show the new info in the same order*/

    inventory.forEach(obj => console.log(`sku: ${obj.sku}`,
    `name: ${obj.name}`, 
    `price: ${obj.price}`, 
    `stock: ${obj.stock}`));


    
    