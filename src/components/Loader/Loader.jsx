import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Rings
      visible={true}
      height="100"
      width="100"
      color="#B182FF"
      ariaLabel="rings-loading"
      wrapperStyle={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '1000',
      }}
      wrapperClass=""
    />
  );
};
