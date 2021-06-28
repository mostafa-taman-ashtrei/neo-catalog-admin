import { float, relationship, select, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productList = list({
    ui: {
        listView: {
            initialColumns: ['title', 'price', 'status', 'created_at'],
        },
    },

    fields: {
        title: text({ isRequired: true }),
        description: text({ isRequired: true }),
        price: float({ isRequired: true }),
        created_at: timestamp(),
        status: select({
            isRequired: true,
            options: [
                { value: 'InStock', label: 'InStock' },
                { value: 'Out of stock', label: 'Out of stock' },
            ],
            defaultValue: 'InStock',
            ui: {
                displayMode: 'segmented-control',
            },
        }),
        owner: relationship({
            ref: 'User.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                inlineEdit: { fields: ['name', 'email'] },
                linkToItem: true,
                inlineCreate: { fields: ['name', 'email'] },
            },
        }),
    },
});

export default productList;