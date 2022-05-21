import Link from "next/link";

export const Header = (props) => {
    return (
        <header>
            <nav>
                <Link href='/'><a>Домой</a></Link>
                <Link href='/posts'><a>Посты</a></Link>
                <Link href='/users'><a>Пользователи</a></Link>
            </nav>
        </header>
    )
}
