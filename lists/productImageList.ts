import { image, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';


const productImage = list({
    ui: {
        listView: {
            initialColumns: ['created_at', 'image', 'product'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),

        image: image({ isRequired: true }),
        alt_text: text({ isRequired: true }),
        image_type: text({ isRequired: true }),
        product: relationship({ ref: 'Product.product_image' }),
    },
});

export default productImage;