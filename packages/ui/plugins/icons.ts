// import { addAPIProvider } from "iconify-icon";
import { addAPIProvider } from "@iconify/vue";
// import "iconify-icon";

export default defineNuxtPlugin(() => {
    addAPIProvider("nobears-case", {
        resources: ["http://127.0.0.1:3002"],
    });
});
