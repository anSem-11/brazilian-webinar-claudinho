import './brazilian-webinar-claudinho-video.scss';

import { Tx } from '@react-root/features/translation/tx.component';
import { useBrowserMount } from '@react-root/hooks/use-browser-mount';
import { UiButton } from '@react-ui/button/ui-button.component';

import { useEffect, useRef, useState } from 'react';

import { CSS_TABLET_WIDTH } from '@fx-project-shared/features/device/device.constant';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('brazilian-webinar-claudinho-video');

export default function BrazilianWebinarClaudinhoVideo(): JSX.Element {
  const [ videoSrc, setVideoSrc ] = useState('');
  const [ posterSrc, setPosterSrc ] = useState('');
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleResize = () => {
    const isDesktop = window.innerWidth >= CSS_TABLET_WIDTH;
    const videoUrl = isDesktop
      ? 'https://direct-landings.azureedge.net/assets/video/brazilian-webinar-claudinho/brazilian-webinar-claudinho-video-desk.mp4'
      : 'https://direct-landings.azureedge.net/assets/video/brazilian-webinar-claudinho/brazilian-webinar-claudinho-video-mob.mp4';
    const posterUrl = isDesktop
      ? 'https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/brazilian-webinar-claudinho-video-poster-desktop.webp'
      : 'https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/brazilian-webinar-claudinho-video-poster-mob.webp';

    setVideoSrc(videoUrl);
    setPosterSrc(posterUrl);
  };

  useBrowserMount(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const togglePlay = () => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    if (videoRef.current && videoRef.current.duration) {
      const progressValue = (videoRef.current.currentTime / videoRef.current.duration) * 100;

      setProgress(progressValue);
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('timeupdate', handleProgress);
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('loadedmetadata', () => setProgress(0));
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleProgress);
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [ videoSrc ]);

  return (
    <section className={bem()}>
      <div className="landing-container">
        <div className={bem('wrapper')}>
          {videoSrc && (
            <video
              ref={videoRef}
              playsInline
              className={bem('video')}
              loop={false}
              muted={false}
              poster={posterSrc}
            >
              <source
                src={videoSrc}
                type="video/mp4"
              />
            </video>
          )}

          <div className={bem('button-wrapper')}>
            {isPlaying && (
              <div className={bem('progress-wrapper')}>
                <div
                  className={bem('progress-bar')}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            <UiButton
              className={`${bem('button')} ${isPlaying ? bem('button-playing') : ''}`}
              handleClick={togglePlay}
              size="l"
              wide={!isPlaying}
            >
              <img
                src={
                  isPlaying
                    ? 'https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/pause-1.svg'
                    : 'https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/play.svg'
                }
                alt={isPlaying ? 'pause-icon' : 'play-icon'}
              />
              {!isPlaying && <Tx>brazilian-webinar-claudinho-video-btn</Tx>}
            </UiButton>
          </div>
        </div>
      </div>
    </section>
  );
}
