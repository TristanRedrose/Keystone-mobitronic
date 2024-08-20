import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { password, text, timestamp } from "@keystone-6/core/fields";

const User = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        password: password({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: {kind : 'now'},
            validation: {isRequired: true},
            ui: {
                createView: { fieldMode: 'hidden' },
            },
        }),
    },
});


export default User;