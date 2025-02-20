export const stringToColor = (string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
};

export const stringAvatar = ({ name = "", src = "", sx = {} }) => {
    return {
        src,
        sx: {
            bgcolor: src ? "" : stringToColor(name),
            ...sx,
        },
        children: name[0],
    };
};

export const parseMixedTagsToText = (input) => {
    const tagPattern = /\[\[.*?\]\]/g;
    let normalText = input;
    normalText = normalText.replace(tagPattern, (match) => {
        const tag = JSON.parse(match.substring(2, match.length - 2));
        return tag.text || tag.value;
    });
    return normalText;
};
