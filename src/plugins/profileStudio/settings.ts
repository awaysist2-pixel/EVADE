import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    showProfileCard: {
        type: OptionType.BOOLEAN,
        description: "Show your custom Profile Studio card",
        default: true
    },
    profileTitle: {
        type: OptionType.STRING,
        description: "Your custom profile title",
        default: "Member"
    },
    badge: {
        type: OptionType.SELECT,
        description: "Choose your cosmetic badge",
        options: [
            { label: "None", value: "none", default: true },
            { label: "Founder", value: "founder" },
            { label: "VIP", value: "vip" },
            { label: "Creator", value: "creator" },
            { label: "Champion", value: "champion" }
        ]
    },
    decoration: {
        type: OptionType.SELECT,
        description: "Choose your profile decoration",
        options: [
            { label: "None", value: "none", default: true },
            { label: "Purple Glow", value: "purple" },
            { label: "Blue Glow", value: "blue" },
            { label: "Red Glow", value: "red" },
            { label: "Golden Frame", value: "gold" }
        ]
    },
    gradientStart: {
        type: OptionType.STRING,
        description: "Username gradient starting HEX color",
        default: "#8A2BE2"
    },
    gradientEnd: {
        type: OptionType.STRING,
        description: "Username gradient ending HEX color",
        default: "#00BFFF"
    }
});
