const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 my-8">
      <p className="text-[#D99904] mb-2 text-xl italic font-normal font-primary">
        ---{subHeading}---
      </p>
      <h3 className="text-4xl font-primary uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
