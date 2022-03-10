import { HomeTmp } from '../../Templates/HomeTmp'
import { AppBar } from '../../UI/Organisms/AppBar'

export const Home = () => {
    return (
        <HomeTmp 
            header={<AppBar/>}
        />
    )
}
