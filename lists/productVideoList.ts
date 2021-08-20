import { relationship, file, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';


const productVideo = list({
    ui: {
        listView: {
            initialColumns: ['created_at', 'video_type', 'product'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),

        video: file({ label: 'Videos', isRequired: true }),
        video_type: text({ isRequired: true }),
        product: relationship({ ref: 'Product.product_video' }),
    },
});

export default productVideo;