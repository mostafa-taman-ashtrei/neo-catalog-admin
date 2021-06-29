import { relationship, text } from '@keystone-next/fields';
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
            ref: 'User.notifications'
        }),
        is_seen: text({ isRequired: true, defaultValue: 'false' }),
    },
});

export default notificationList;
