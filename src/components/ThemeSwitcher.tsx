
import { useTheme } from '../context/themecontext'
const ThemeSwitcher = () => {
    const { toggleTheme, theme } = useTheme()
    const buttonCLasses = `text-color-${theme} bg-color-${theme}`
    return (
        <div>
            <button onClick={() => toggleTheme('theme1')} className={buttonCLasses}>Light</button>
            <button onClick={() => toggleTheme('theme2')} className={buttonCLasses}>dark</button>
        </div>
    )
}

export default ThemeSwitcher