const links = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "works.html", label: "Works" },
  { href: "contact.html", label: "Contact" },
];

const SideBar = () => {
  return (
    <aside className="flex w-[220px] shrink-0 flex-col gap-8  border-r border-sidebar px-[30px] py-10">
      <h1 className="text-[28px] font-bold leading-10 text-primary">
        Boris Delgadillo
      </h1>

      <div className="flex flex-col gap-3">
        {links.map(({ href, label, active }) => (
          <a
            key={href}
            href={href}
            className={`border-b py-1.5 text-sm transition duration-200 hover:border-accent hover:text-accent ${
              active
                ? "border-sidebar text-sidebar"
                : "border-transparent text-neutral-500"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="mt-auto">
        <p className="text-sm text-neutral-500">Footer</p>
      </div>
    </aside>
  );
};

export default SideBar;
