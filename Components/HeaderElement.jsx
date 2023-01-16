function HeaderElement({ Icon, title }) {
  return (
    <div className=" flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-10 mb-2 group-hover:animate-bounce text-4xl" />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest ">
        {title}
      </h1>
    </div>
  );
}

export default HeaderElement;
