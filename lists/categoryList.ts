import { image, integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const categoryList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'image', 'products', 'num_of_products'],
        },
    },
    fields: {
        name: text({ isRequired: true }),
        num_of_products: integer({ isRequired: true }),
        image: image(),
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        description: text(),
        products: relationship({
            ref: 'Product.category',
            many: true,
        }),
    },
});

export default categoryList;
