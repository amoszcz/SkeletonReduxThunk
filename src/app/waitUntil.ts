export const waitUntil = (canProceed: () => boolean): Promise<void> => {
    return new Promise((resolve) => {
        const isReady = () => {
            if (canProceed()) resolve();
            else {
                setTimeout(isReady, 100);
            }
        };
        isReady();
    });
};
