import {Layout} from "../Layout";
import classes from './styles.module.scss';

export const MainPage = (props) => {
    return (
        <Layout>
            <div className={classes.mainPage}>
                <h1>Главная страница</h1>
            </div>
        </Layout>
    )
}
