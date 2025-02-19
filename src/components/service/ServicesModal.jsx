export default function ServicesModal(props) {
  return (
    <div className={props.classWrapper}>
      <button
        className={props.classButton}
        type={props.typeButton}
        onClick={props.buttonClick}
      >
        {props.serviceName}
      </button>
      <dialog id={props.dialogId}>
        <form method={props.formMethod}>
          <button className={props.classButtonClose}>X</button>
        </form>
        <p>{props.dialogWindow}</p>
      </dialog>
    </div>
  );
}
