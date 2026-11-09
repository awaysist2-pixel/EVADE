
import { settings } from "@plugins/profileStudio/settings";
import { UserStore } from "@webpack/common";
import { React } from "@webpack/common";
import type { ProfileCollectionFactory } from "@api/ProfileCollections";

type Props = Parameters<ProfileCollectionFactory>[0];

const FOUNDER_USER_ID = "1516886779712634951";

const badgeNames: Record<string, string> = {
    founder: "EVADE FOUNDER",
    vip: "VIP",
    creator: "CREATOR",
    champion: "CHAMPION"
};

const decorationShadows: Record<string, string> = {
    purple: "0 0 18px rgba(138, 43, 226, 0.55)",
    blue: "0 0 18px rgba(0, 191, 255, 0.55)",
    red: "0 0 18px rgba(255, 55, 55, 0.55)",
    gold: "0 0 18px rgba(255, 190, 40, 0.55)"
};

function safeColor(value: string, fallback: string) {
    return /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback;
}

export function ProfileStudioCard(props: Props) {
    const config = settings.use([
        "showProfileCard",
        "profileTitle",
        "badge",
        "decoration",
        "gradientStart",
        "gradientEnd"
    ]);

    const currentUser = UserStore.getCurrentUser();

    if (!config.showProfileCard || !currentUser || props.user.id !== currentUser.id) {
        return null;
    }

    const isFounder = currentUser.id === FOUNDER_USER_ID;
    const badge = isFounder
        ? "EVADE FOUNDER"
        : config.badge === "founder"
            ? undefined
            : badgeNames[config.badge];

    const start = safeColor(config.gradientStart, "#8A2BE2");
    const end = safeColor(config.gradientEnd, "#00BFFF");

    return (
        <section
            style={{
                marginTop: "12px",
                padding: "14px",
                borderRadius: "12px",
                background: "var(--background-secondary)",
                border: config.decoration === "gold"
                    ? "1px solid #D6A637"
                    : "1px solid var(--background-modifier-accent)",
                boxShadow: decorationShadows[config.decoration] ?? "none"
            }}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "9px"
            }}>
                <span style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1.2px",
                    color: "var(--header-secondary)"
                }}>
                    PROFILE STUDIO
                </span>

                {badge && (
                    <span style={{
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                        color: "#FFFFFF",
                        background: "linear-gradient(100deg, #7650D8, #279BE8)"
                    }}>
                        {badge}
                    </span>
                )}
            </div>

            <div style={{
                fontSize: "20px",
                fontWeight: 800,
                backgroundImage: `linear-gradient(90deg, ${start}, ${end})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                overflowWrap: "anywhere"
            }}>
                {props.user.username}
            </div>

            <div style={{
                marginTop: "5px",
                fontSize: "13px",
                color: "var(--header-secondary)"
            }}>
                {config.profileTitle || "Member"}
            </div>
        </section>
    );
}
