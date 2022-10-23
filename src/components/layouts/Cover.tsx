export const Cover = () => {
  return (
    <div
      className="h-full max-h-48 md:max-h-72 relative top-0 
      inset-x-0 z-10 flex justify-center items-start pt-10 md:pt-16
      bg-lines-cover bg-cover bg-center"
    >
      <h2 className="flex md:flex-col justify-center content-center flex-wrap gap-6">
        <img
          src="../../../public/assets/images/symbol.svg"
          alt="Terminal symbol"
          className="self-center"
        />
        <img
          src="../../../public/assets/images/title.svg"
          alt="GitHub Blog"
          className="self-center"
        />
        <span className="sr-only">GitHub Blog</span>
      </h2>
    </div>
  )
}