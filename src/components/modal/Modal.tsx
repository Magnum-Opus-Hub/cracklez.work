import  urlFor  from '../../../lib/urlFor';
import style from  './Modal.module.scss';
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

          <Image src={imgUrl} alt="bigger picture" height={900} width={800}/>
          <span className={style.xbutton}  onClick={handleClick}>
          <p className='dismiss'>x</p>
          </span>

        </div>
        ) : (
          <>
            <div className="overlay dismiss" onClick={handleClick} >
        <div onClick={handleRotationLeft} className="overlay-arrows_left" >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Image src={imgUrl} alt="bigger picture" height={900} width={800}/>
        <span className={style.xbutton} onClick={handleClick}>
        <p className='dismiss'>X</p>
        </span>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
          </>
        )}
    </>
  );
};

export default Modal;
