import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const tagList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'products'],
        },
    },
    fields: {
        name: text({ isRequired: true }),
        products: relationship({
            ref: 'Product.tags',
            many: true,
        }),
    },
});

export default tagList;
