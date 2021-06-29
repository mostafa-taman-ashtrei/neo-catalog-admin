import { text, integer, decimal } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const ordersProductList = list({
    ui: {
        listView: {
            initialColumns: ['product_title', 'product_price', 'products_final_price'],
        },
    },
    fields: {
        product_title: text({ isRequired: true }),
        product_quantity: integer({ isRequired: true }),
        product_price: decimal({ isRequired: true }),
        products_tax: decimal(),
        products_final_price: decimal(), // the price can change if the product is discounted
    },
});

export default ordersProductList;