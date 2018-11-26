import 'mocha';
import { Order } from './order';
import { Line } from './line';
import { Bike } from './bike';
import { expect } from 'chai';

const defy = new Bike("Giant", "Defy 1", Bike.OneThousand);
const elite = new Bike("Specialized", "Venge Elite", Bike.TwoThousand);
const duraAce = new Bike("Specialized", "S-Works Venge Dura-Ace", Bike.FiveThousand);

const resultStatementOneDefy = `Order Receipt for Anywhere Bike Shop
\t1 x Giant Defy 1 = $1,000.00
Sub-Total: $1,000.00
Tax: $72.50
Total: $1,072.50`;

describe('Receipt 1 Defy', () => {
    it('should print a reciept with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(defy, 1));
        expect(order.Receipt()).to.equal(resultStatementOneDefy);
    });
});


const resultStatementOneElite = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized Venge Elite = $2,000.00
Sub-Total: $2,000.00
Tax: $145.00
Total: $2,145.00`;

describe('Receipt 1 Elite', () => {
    it('should print a reciept with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(elite, 1));
        expect(order.Receipt()).to.equal(resultStatementOneElite);
    });
});

const resultStatementOneDuraAce = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized S-Works Venge Dura-Ace = $5,000.00
Sub-Total: $5,000.00
Tax: $362.50
Total: $5,362.50`;

describe('Receipt 1 Dura-Ace', () => {
    it('should print a reciept with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(duraAce, 1));
        expect(order.Receipt()).to.equal(resultStatementOneDuraAce);
    });
});

const htmlResultStatementOneDefy = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Giant Defy 1 = $1,000.00</li></ul><h3>Sub-Total: $1,000.00</h3><h3>Tax: $72.50</h3><h2>Total: $1,072.50</h2></body></html>';

describe('Html Receipt 1 Defy', () => {
    it('should print an html reciept with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(defy, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneDefy);
    });
});


const htmlResultStatementOneElite = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized Venge Elite = $2,000.00</li></ul><h3>Sub-Total: $2,000.00</h3><h3>Tax: $145.00</h3><h2>Total: $2,145.00</h2></body></html>';

describe('Html Receipt 1 Elite', () => {
    it('should print an html reciept with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(elite, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneElite);
    });
});

const htmlResultStatementOneDuraAce = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized S-Works Venge Dura-Ace = $5,000.00</li></ul><h3>Sub-Total: $5,000.00</h3><h3>Tax: $362.50</h3><h2>Total: $5,362.50</h2></body></html>';

describe('Html Receipt 1 Dura-Ace', () => {
    it('should print an html reciept with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop");
        order.AddLine(new Line(duraAce, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneDuraAce);
    });
});
