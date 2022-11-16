function MenuBarItem(props) {
  return (
    <a href={props.section} className="">
      <div className="text-center rounded-[0.5rem] mr-3 bg-white">
        <h1 className="text-blue-600 py-5 text-xl font-semibold">
          {props.text}
        </h1>
      </div>
    </a>
  );
}
export default MenuBarItem;
