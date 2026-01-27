export default function SocialButtons({ icon, text }) {
  return (
    <div>
      <button
        className="
        w-full
        flex items-center justify-center gap-3
        py-3
        bg-white
        border border-gray-200
        rounded-xl
        text-sm font-medium text-gray-700
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]
        hover:bg-gray-50
        transition
      "
      >
        <img src={icon} alt={text} className="w-5 h-5" />
        {text}
      </button>
    </div>
  );
}
