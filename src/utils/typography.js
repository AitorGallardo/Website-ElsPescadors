import Typography from "typography"
import noriegaTheme from 'typography-theme-noriega'

noriegaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a , p': {
      color: 'orange',
      marginTop: rhythm(2),
    }
  })

const typography = new Typography({noriegaTheme})

export default typography