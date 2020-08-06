
const ThemeSelection = ({ themes = [] }) => {
    return (
        <div>
            {themes.map((theme, inx) => {
                return (
                    <div key={inx}>{theme.name}</div>
                )
            })}
        </div>
    )
}

export default ThemeSelection