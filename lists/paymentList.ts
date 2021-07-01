import { text, timestamp, relationship, select } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const paymentMethodList = list({
    ui: {
        listView: {
            initialColumns: ['payment_method', 'currency', 'customers', 'orders'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        payment_method: select({ // relationship
            options: [
                { value: 'cash', label: 'cash' },
                { value: 'visa', label: 'visa' },
                { value: 'paypal', label: 'paypal' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
        }),
        customers: relationship({ ref: 'User', many: true }),
        orders: relationship({ ref: 'Order.payment_method', many: true }),
        currency: text({ isRequired: true }),
    },
});

export default paymentMethodList;