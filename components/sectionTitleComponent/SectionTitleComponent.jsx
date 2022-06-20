export default function SectionTitleComponent({ title, subTitle, icon }) {
  return (
    <div className="descWrap">
      <div className="descWrap__icon">{icon}</div>
      <div className="textWrap">
        <h1 className="textWrap__title">{title}</h1>
        <span className="textWrap__desc">{subTitle}</span>
      </div>
    </div>
  );
}
