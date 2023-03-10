interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

const myIceCream: Sundae = {
    flavor: 'Baunilha',
    scoops: 5,
    sauce: 'chocolate',
    nuts: true,
    whippedCream: true
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'baunilha', scoops: 5, sauce: 'caramelo' }));

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramelo' | 'morango';
    nuts?: boolean,
    whippedCream?: boolean;
    instructions?: string;
}