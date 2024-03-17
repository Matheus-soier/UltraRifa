type Props = {
    number: string;
    label: string;
}

export const GridMainNumber = ({number, label}: Props) => {
    return(
        <div className="bg-white flex flex-col justify-center items-center w-full min-h-48 h-fit border border-gray-200 rounded-xl">
            <div className="flex flex-col items-center gap-2 p-5">
              <h3 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-second to-primary md:text-5xl">{number}</h3>
              <p className="text-sm sm:text-base">{label}</p>
            </div>
          </div>
    );
}