import useOrientation from '@/hooks/useOrientation';

import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';

function Welcome() {
  const isPortrait = useOrientation();

  const imageSize = 'w-1/10 h-1/10 m-1';
  const reactImageSize = isPortrait ? 'w-2/5 h-1/3' : 'w-1/3 h-2/5';

  return (
    <>
      <meta name="title" content="Welcome" />
      <div
        className={`w-full h-full flex items-center justify-center ${isPortrait ? 'flex-col' : 'flex-row'}`}
      >
        <img alt="react-router" src={rrLogo} className={imageSize} />
        <img alt="vite" src={viteLogo} className={imageSize} />
        <img alt="typescript" src={tsLogo} className={imageSize} />
        <img alt="react" src={reactLogo} className={reactImageSize} />
        <img alt="recoil" src={recoilLogo} className={imageSize} />
        <img alt="pwa" src={pwaLogo} className={imageSize} />
      </div>
    </>
  );
}

export default Welcome;
