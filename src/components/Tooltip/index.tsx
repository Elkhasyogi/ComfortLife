type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group inline-block cursor-pointer">
      {children}
      <div className="absolute z-20 whitespace-nowrap rounded-[5px] px-4.5 py-[7px] invisible group-hover:visible drop-shadow-4 text-body-sm font-medium bg-white dark:bg-dark-2 left-full top-1/2 -translate-y-1/2 ml-3">
        <span className="absolute -z-10 size-2 rotate-45 rounded-sm bg-white dark:bg-dark-2 left-[-3px] top-1/2 -translate-y-1/2"></span>{text}</div>
    </div>
  );
}