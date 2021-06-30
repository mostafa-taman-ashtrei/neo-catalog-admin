import { text, timestamp, relationship, decimal } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const taxList = list({
    ui: {
        listView: {
            initialColumns: ['tax_name', 'tax_rate'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        tax_name: text({ isRequired: true }),
        tax_rate: decimal({ isRequired: true }),
        tax_description: text(),
        products: relationship({ ref: 'Product.tax', many: true })
    },
});

export default taxList;