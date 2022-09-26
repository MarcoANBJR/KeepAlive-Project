import { Alert as AlertCss } from './styles'

export default function Alert({children}: any) {
    return (
        <AlertCss>
            {children}
        </AlertCss>
    )
}