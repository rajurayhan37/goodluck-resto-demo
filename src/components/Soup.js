import food1 from "./images/food-1.png";
import food2 from "./images/food-2.png";
import food3 from "./images/food-3.png";
import food4 from "./images/food-4.png";
import MenuItem from "./MenuItem";

function Soup() {
  return (
    <section id="soup" className="pt-12 px-3 sm:px-6 md:px-14 lg:px-16">
      <div className="py-8 sm:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Soup Items
        </p>
        <p className="mx-auto mt-2 max-w-lg text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate .
        </p>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MenuItem image={food1} />
        <MenuItem image={food2} />
        <MenuItem image={food3} />
        <MenuItem image={food4} />
        <MenuItem image={food4} />
        <MenuItem image={food4} />
      </div>
    </section>
  );
}
export default Soup;
