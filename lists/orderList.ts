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
        currency: text({ isRequired: true }),
        payment_method: select({
            options: [
                { value: 'cash', label: 'cash' },
                { value: 'visa', label: 'visa' },
                { value: 'paypal', label: 'paypal' },
            ],
            ui: {
                displayMode: 'segmented-control',
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
                inlineCreate: { fields: ['name'] },
            },
        }),
        orders_product: relationship({ ref: 'OrdersProduct', many: true }),
    },
});

export default orderList;