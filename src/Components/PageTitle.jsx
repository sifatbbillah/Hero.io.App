const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center py-20">
      <h1 className="text-[#001931] text-5xl font-bold mb-3">{title}</h1>
      <p className="text-xl text-[#627382] font-normal">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
