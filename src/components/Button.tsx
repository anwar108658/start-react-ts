interface ButtonProps {
  label: number|string;
  click?: (e:any) => any;
}

const Button = ({ label, click }: ButtonProps) => {
  // Check if the button is interactive
  const isInteractive = !!click;

  return (
    <button 
      disabled={!isInteractive}
      onClick={click}
      className={`
        /* Typography & Layout */
        px-2 py-1 font-semibold text-white text-sm rounded-md
        
        /* Modern Gradient Background */
        bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
        
        /* Shadows & Glow */
        shadow-[0_4px_20px_rgba(168,85,247,0.4)]
        
        /* Smooth Transitions */
        transition-all duration-300 ease-out
        
        /* Conditional Interactive Styles */
        ${isInteractive 
          ? 'cursor-pointer hover:scale-102 hover:shadow-[0_6px_25px_rgba(168,85,247,0.6)] active:scale-98' 
          : 'opacity-70 cursor-not-allowed'
        }
      `}
    >
      {label}
    </button>
  )
}

export default Button
