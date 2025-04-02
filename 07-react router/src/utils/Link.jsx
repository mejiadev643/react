function navigateTo(url) {
    window.history.pushState({}, '', url)
    const navigationEvent = new PopStateEvent('popstate') // Usar el evento nativo 'popstate'
    window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
        const isMainEvent = event.button === 0 // Verificar si el botón del mouse es el principal (izquierdo)
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // Verificar si se mantiene alguna tecla modificadora
        const isManageableEvent = target === undefined || target === '_self' // Verificar si el evento es manejable
        if (isManageableEvent && isMainEvent && !isModifiedEvent) {
            event.preventDefault()
            navigateTo(to)
        }
    }
    return <a href={to} onClick={handleClick} target={target} {...props} />
}
