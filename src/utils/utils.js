// Получение Actions по ключу
export const getKeyActions = (obj, key) => {
    if (!obj || typeof obj !== 'object') {
        return null;
    }

    if (obj.hasOwnProperty(key)) {
        if (obj[key].hasOwnProperty('action')) {
            return obj[key].action;
        }
    }

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            const result = getKeyActions(obj[prop], key);
            if (result !== null) {
                return result;
            }
        }
    }

    return null;
};

// Отмечаем конкретный Action как выбранный
export const handleAction = (obj, actionKey, titleKey) => {
    if (!obj || typeof obj !== 'object') {
        return null;
    }

    if (obj.hasOwnProperty(titleKey) && obj[titleKey].action !== undefined) {
        if (obj[titleKey].action.hasOwnProperty(actionKey)) {
            obj[titleKey].action[actionKey] === 0
                ? obj[titleKey].action[actionKey] = 1
                : obj[titleKey].action[actionKey] = 0;
            return true;
        }
    }

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            const result = handleAction(obj[prop], actionKey, titleKey);
            if (result) {
                return result;
            }
        }
    }

    return null;
}