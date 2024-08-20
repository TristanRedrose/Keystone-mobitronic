import { config } from "@keystone-6/core";
import { withAuth, session } from "./auth";
import lists from "./lists/lists";

export default config (
    withAuth({
        db: {
            provider: "sqlite",
            url: 'file:./keystone.db',
        },
        lists,
        session,
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,
        }
    })
);