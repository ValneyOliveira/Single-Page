import CommonButton from "../Button/CommonButton";

const CustomSection = () => {
    return (
      <div className='min-h-56 p-4 flex justify-center gap-x-5 bg-slate-50'>
  
          <div className='flex flex-col justify-center items-center gap-5 p-2'>
              <h4 className='flex flex-col items-center text-4xl font-semibold text-[#263238]'>
                Pellentesque suscipit <span>fringilla libero eu.</span>
              </h4>
              <CommonButton>Get Demo</CommonButton>
          </div>
      </div>
    );
};

export default CustomSection;