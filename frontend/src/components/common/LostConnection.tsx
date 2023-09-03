import { FC, ReactNode, useState, useEffect } from 'react';

interface ILostConnection {
  children: ReactNode;
}

const LostConnection: FC<ILostConnection> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const onlineStatus = (): (() => void) => {
    const handleOnlineStatus = (): void => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  };

  useEffect(() => {
    const cleanup = onlineStatus();
    return cleanup;
  }, []);

  return (
    <>
      {isOnline ? (
        children
      ) : (
        <div className='text-white at_page_center'>LOST CONNECTION</div>
      )}
    </>
  );
};

export default LostConnection;
