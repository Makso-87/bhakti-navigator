import Link from 'next/link';
import classes from './Button.module.scss';

export const Button = ({
  text,
  link,
  margin = '0',
  simpleLink = false,
}: {
  text: string;
  link: string;
  margin?: string | null;
  simpleLink?: boolean;
}) => {
  return (
    <div className={classes.Button} style={{ margin: margin }}>
      {simpleLink ? (
        <a href={link}>{text}</a>
      ) : (
        <Link href={link}>
          <a>{text}</a>
        </Link>
      )}
    </div>
  );
};
