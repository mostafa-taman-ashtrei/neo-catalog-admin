import { text, timestamp, relationship, select, float } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const orderList = list({
    ui: {
        listView: {
            initialColumns: ['status', 'customer', 'payment_method', 'orders_product', 'order_total'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        order_total: float({ isRequired: true }),
        billing_postcode: text(),
        billing_city: text({ isRequired: true }),
        billing_country: text({ isRequired: true }),
        delivery_street_address: text({ isRequired: true }),
        delivery_name: text({ isRequired: true }),
        payment_method: relationship({
            ref: 'PaymentMethod.orders',
            ui: {
                displayMode: 'cards',
                cardFields: ['payment_method', 'currency'],
                linkToItem: true,
                inlineConnect: true
            },
        }),
        status: select({
            options: [
                { value: 'Inprogress', label: 'Inprogress' },
                { value: 'Delivered', label: 'Delivered' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
            defaultValue: 'Inprogress',
        }),
        customer: relationship({
            ref: 'User.orders',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                inlineEdit: { fields: ['name'] },
                linkToItem: true,
                inlineConnect: true,
            },
        }),
        orders_product: relationship({
            ref: 'OrdersProduct',
            ui: {
                displayMode: 'cards',
                cardFields: ['product_title', 'product_quantity', 'products_final_price'],
                inlineConnect: true,
                linkToItem: true
            },
            many: true
        }),
    },
});

export default orderList;