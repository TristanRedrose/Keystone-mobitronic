import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { float, relationship, select, text, timestamp } from "@keystone-6/core/fields";

const Phone = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true } }),
        price: float({ validation: { isRequired: true} }),
        manufacturer: relationship({ ref: 'Manufacturer.phones'}),
        createdAt: timestamp({
            defaultValue: {kind : 'now'},
            validation: {isRequired: true},
            ui: {
                createView: { fieldMode: 'hidden' },
            },
        }),
        status: select({
            options: [
                { label: 'Available', value: 'available' },
                { label: 'Unavailable', value: 'unavailable' },
            ],
            defaultValue: 'available',
            ui: { displayMode: 'segmented-control' },
        })
    },
});

export default Phone;