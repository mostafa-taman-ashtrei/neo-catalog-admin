import { relationship, select, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const notificationList = list({
    ui: {
        listView: {
            initialColumns: ['notification', 'is_seen', 'customer'],
        },
    },
    fields: {
        notification: text({ isRequired: true }),
        customer: relationship({
            ref: 'User.notifications',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                linkToItem: true,
                inlineConnect: true
            },
        }),
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        is_seen: select({
            options: [
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
            ],
            ui: {
                displayMode: 'select',
            },
            defaultValue: 'false',
        }),
    },
});

export default notificationList;
