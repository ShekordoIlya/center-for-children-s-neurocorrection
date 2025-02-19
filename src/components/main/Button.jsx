export default function Button(props) {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.buttonClicked}
    >
      {props.title}
    </button>
  );
}
