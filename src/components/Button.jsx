const Button = ({styles}) => (
  <div 
    className="relative group">
    <div 
      className={`"absolute bg-blue-300 inset-0 rounded-[10px] group-hover:blur-sm group-hover:transition group-hover:duration-500" ${styles}`}></div>
    <button 
      type='button' 
      className={`relative py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary group-hover:text-white outline-none rounded-[10px] ${styles}`}>
    Get Started
    </button>
  </div>
)

export default Button