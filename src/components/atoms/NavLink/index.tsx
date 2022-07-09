import Link from "next/link";

export default function NavLink(props: {
  href: string;
  title: string;
  active: boolean;
}) {
  return (
    <Link href={props.href}>
      <div
        className={`cursor-pointer text-slate-900 hidden md:block mr-10 p-2 hover:text-white ${
          props.active
            ? `text-white bg-slate-800 shadow-sm shadow-slate-500/50`
            : ``
        } px-4 rounded-md hover:bg-slate-800 hover:shadow-sm hover:shadow-slate-500/50`}
      >
        <a>{props.title}</a>
      </div>
    </Link>
  );
}
