import { useState, useEffect } from 'react'
import { match } from 'path-to-regexp'

export const Router = ({ routes = [], defaultComponent: DefaultComponent = () => <h4>Not Found!!</h4> }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    let routeParams = {}
    const Page = routes.find(({ path }) => {
        if(path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true
    })?.Component

    return Page ? (
        <Page routeParams={routeParams} />
    ) : (
        <DefaultComponent />
    )
}