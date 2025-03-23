function formatEnum (enumVar: string) {
    return enumVar
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export {formatEnum};