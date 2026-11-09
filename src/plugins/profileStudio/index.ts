import { settings } from "@plugins/profileStudio/settings";
import { ProfileStudioCard } from "@plugins/profileStudio/ProfileStudioCard";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { React } from "@webpack/common";

export default definePlugin({
    name: "ProfileStudio",
    description: "Customize your own profile with local titles, badges, colors, and decorations",
    tags: ["Appearance"],
    authors: [Devs.rootpoi, Devs.kraethis, Devs.ewlle],
    dependencies: ["ProfileCollectionsAPI"],
    settings,

    renderProfileCollection: {
        render: props => React.createElement(ProfileStudioCard, props),
        priority: 100
    }
});
