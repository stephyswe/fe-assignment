import { RatingImage } from "../../components/rating";

export const SearchItem = ({ data, onClickShow }: any) => {
    const { show } = data;
    const { name, image } = show;
  
    return (
      <div
        onClick={() => onClickShow(name)}
        className="flex-col w-[13.5625rem] hover:cursor-pointer"
      >
        <div className="bg-black flex items-center">
          <div
            className="font-['Helvetica'] h-[305px] w-[13.5625rem]"
            style={{
              backgroundImage: `url(${image?.medium})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="mt-3">
          <div className="font-['Helvetica'] font-bold text-white mb-2">
            {name}
          </div>
          <RatingImage />
        </div>
      </div>
    );
  }