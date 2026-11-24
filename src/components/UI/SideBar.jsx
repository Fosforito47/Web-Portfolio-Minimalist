const links = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "works.html", label: "Works" },
  { href: "contact.html", label: "Contact" },
];

const SideBar = () => {
  return (
    <aside
      className="
    flex flex-row md:flex-col
    h-fit md:h-full
    w-full md:w-[220px]  
    shrink-0  gap-6 md:gap-8 
    border-b md:border-b-0 md:border-r 
    border-sidebar 
    px-4 md:px-[30px] 
    py-2 md:py-10
    items-center md:items-start"
    >
      <h1 className="text-md grow items-center md:flex-none  md:text-[28px] font-bold  leading-5 md:leading-10 text-primary">
        Boris Delgadillo
      </h1>

      <div className="flex flex-row md:flex-col gap-3">
        {links.map(({ href, label, active }) => (
          <a
            key={href}
            href={href}
            className={`border-b py-1.5 text-xs md:text-sm transition duration-200 hover:border-accent hover:text-accent ${
              active
                ? "border-sidebar text-sidebar"
                : "border-transparent text-neutral-500"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="hidden md:block mt-auto">
        <p className="text-sm text-neutral-500">Footer</p>
      </div>
    </aside>
  );
};

export default SideBar;
