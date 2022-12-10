import { Watch } from 'react-loader-spinner';

export const Preloader = () => {
  return (
    <Watch
      height='80'
      width='80'
      radius='48'
      color='#647db7'
      ariaLabel='watch-loading'
      wrapperClass='loader-container'
      visible={true}
    />
  );
};
