import style from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>404 NOT FOUND</h1>
        <h3 className={style.shortcontent}>Some thing wrong occur</h3>
        <p className={style.content}>Please check your internet connect</p>
      </div>
    </>
  );
}

export default NotFound;
