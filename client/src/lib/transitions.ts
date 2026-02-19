/**
 * Helper to wrap navigation with the View Transitions API
 * @param callback The function that performs the navigation (e.g., setLocation)
 */
export function navigateWithTransition(callback: () => void) {
    // Check if browser supports View Transitions API
    // @ts-ignore - API experimental
    if (!document.startViewTransition) {
        callback();
        return;
    }

    // @ts-ignore
    document.startViewTransition(() => {
        callback();
    });
}
