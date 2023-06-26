import urlFor from '../../../lib/urlFor';
import style from './Modal.module.scss';
import Image from 'next/image';

const Modal = ({
  clickedImg,
  handleRotationRight,
  setClickedImg,
  totalLength,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setClickedImg(null);
    }
  };

  const imgUrl = clickedImg ? urlFor(clickedImg).url() : '';

  return (
    <>
      {totalLength === 1 ? (
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={imgUrl} alt="bigger picture" />
          <span className={style.xbutton} onClick={handleClick}>
            <p className="dismiss">x</p>
          </span>
        </div>
      ) : (
        <>
          <div className="overlay dismiss" onClick={handleClick}>
            <div onClick={handleRotationLeft} className="overlay-arrows_left">
              <button>
                <Image
                  src={`/images/arrow21.svg`}
                  alt=""
                  height={15}
                  width={50}
                />
              </button>
            </div>
            <img src={imgUrl} alt="bigger picture"/>
            <span className={style.xbutton} onClick={handleClick}>
              <p className="dismiss">X</p>
            </span>
            <div onClick={handleRotationRight} className="overlay-arrows_right">
              <button>
                <Image
                  src={`/images/arrow2.svg`}
                  alt=""
                  height={15}
                  width={50}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
