import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center shadow-md px-4 pt-2">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 test-2xl">Docs</h1>

      <div
        className="md:mx-20 flex flex-grow items-center px-5 
      py-2 bg-gray-100 text-gray-600 rounded-lg mx-5
      focus-within:text-gray-600 focus-within:shadow-md"
      >
        <Icon name="search" size="3xl" color="darkgray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://lh3.googleusercontent.com/a-/AOh14GgV-ZUNxoeBOcKrQXLyzVjCbNrE21yK0JxHO2dN5ao=s96-c"
        alt=""
      />
    </header>
  );
}

export default Header;
