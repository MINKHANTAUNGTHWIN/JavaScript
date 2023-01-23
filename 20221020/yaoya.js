// apple = 200, orange = 50, pineapple = 300, watermelon = 1000

function buyFruit(fruit, money, nanko) { // apple, 1000, 2
    // 
    if (fruit == 'apple') {
        let totalCost = 200 * nanko;
        if(money < totalCost){
            return (totalCost - money) + '円足りません。';
        }else{
            return (money - totalCost) + '円のお釣りです。'
        }
    }

    if(fruit== 'orange') {
        let totalCost = 50 * nanko;
        if(money < totalCost){
            return (totalCost - money) + 'not enough';
        }else{
            return (money - totalCost) + 'Return cash';
        }
    }

    if(fruit== 'pineapple') {
        let totalCost = 300 * nanko;
        if(money < totalCost){
            return (totalCost - money) + 'not enough';
        }else{
            return (money - totalCost) + 'Return cash';
        }
    }

    if(fruit== 'watermelon') {
        let totalCost = 1000 * nanko;
        if(money < totalCost){
            return (totalCost - money) + 'not enough';
        }else{
            return (money - totalCost) + 'Return cash';
        }
    }

}
console.log(buyFruit('apple', 1000, 2));
console.log(buyFruit('orange',1000,3));
console.log(buyFruit('pineapple', 1000, 1));
console.log(buyFruit('watermelon',1000,5));
