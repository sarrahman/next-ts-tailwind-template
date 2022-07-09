export default function Button(props: { title: string; css?: string }) {
  return (
    <button
      className={`p-2 px-4 text-white rounded-md hover:opacity-80 ${props.css}`}
    >
      {props.title}
    </button>
  );
}
