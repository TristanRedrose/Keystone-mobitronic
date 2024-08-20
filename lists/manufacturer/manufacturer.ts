import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

const Manufacturer = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true } }),
        phones: relationship({ ref: 'Phone.manufacturer', many: true}),
        createdAt: timestamp({
            defaultValue: {kind : 'now'},
            validation: {isRequired: true},
            ui: {
                createView: { fieldMode: 'hidden' },
            },
        }),
    },
});

export default Manufacturer;