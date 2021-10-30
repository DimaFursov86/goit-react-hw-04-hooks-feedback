import s from "../Section/Section.module.css";
export default function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}
