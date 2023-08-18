import { useParams } from "react-router-dom";
import { Logo } from "../../components/logo";
import { SearchDefault, SearchDetails } from "../../components/search";
import { getShowByNameFullSearch } from "../../api";
import { useEffect, useState } from "react";
import { RatingImage } from "../../components/rating";
import { CastList } from "./cast-list";
import { Container } from "../../layouts/container";

export default function DetailPage() {
  const { id } = useParams();
  console.log("DetailPage id", id);
  const [show, setShow] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await getShowByNameFullSearch(id);
          setShow(data);
        }
      } catch (error: any) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      }
    };
    fetchData();
  }, [id]);

  if (!show) return <div>loading</div>;

  const contentData = {
    name: show.name,
    summary: show.summary,
    title: show.name,
    genres: show.genres,
    image: show.image.medium,
  };

  return (
    <Container>
      <div className="pt-12">
        <div className="flex xl:flex-row flex-col xl:gap-20 gap-10 items-center mb-6">
          <Logo />
          <div className="bg-white flex flex-row justify-between xl:w-[630px] w-full items-center pl-4 pr-1">
            <SearchDefault defaultInput={id} />
          </div>
        </div>
        <BackToSearchResults />
        <div className="self-stretch flex flex-row gap-16 items-start ml-8 mr-10 order">
          <DetailImage name={contentData.name} image={contentData.image} />
          <ContentItem data={contentData} />
        </div>
      </div>
    </Container>
  );
}

export const Search = () => (
  <div className="flex xl:flex-row flex-col xl:gap-20 gap-10 items-center mb-6">
    <Logo />
    <SearchDetails />
  </div>
);

const DetailImage = ({ name, image }: any) => (
  <div className="relative flex flex-col w-[150px] xl:w-[271px] shrink-0 items-start order-2 xl:order-1">
    <div className="xl:w-[270px] h-[380px]">
      <img alt={name} src={image} className="relative" id="Bitmap1" />
    </div>
  </div>
);

const ContentItem = ({ data }: any) => (
  <div className="flex flex-col mt-4 gap-10 w-[620px] items-start order-1 xl:order-2">
    <div className="self-stretch flex flex-col ml-px gap-5 items-start">
      <Content title={data.title} genres={data.genres} />
      <Description summary={data.summary} />
    </div>
    <CastList />
  </div>
);

const BackToSearchResults = () => (
  <div className="bg-black self-stretch flex flex-row gap-3 h-12 shrink-0 items-center mb-8 mr-px pt-3 px-6 rounded">
    <img
      alt="back-to-serch-results"
      src="https://file.rendit.io/n/LveI4rZscl2ML1t4zxRG.svg"
      className="self-start mt-px w-6 shrink-0"
      id="Iconsbackarrow"
    />
    <div
      className="font-['Helvetica'] font-bold text-white"
      id="BackToSearchResul"
    >
      Back to search results
    </div>
  </div>
);

const Content = ({ title, genres }: any) => (
  <div className="flex flex-col gap-2 items-start">
    <div className="text-4xl font-['Helvetica'] font-bold text-white mb-px ml-px">
      {title}
    </div>
    <RatingImage />
    <div
      className="font-['Helvetica'] font-bold leading-[25px] text-white ml-px"
      id="GenresComedyRom1"
    >
      Genres:{" "}
      <div className="text-[#d5d5d5] contents" id="GenresComedyRom">
        {genres.map((genre: any, index: number) => (
          <Genre key={genre} genre={genre} showDivider={index !== 0} />
        ))}
      </div>
    </div>
  </div>
);

const Genre = ({
  genre,
  showDivider,
}: {
  genre: string;
  showDivider: boolean;
}) => (
  <span>
    {showDivider && " | "}
    {genre}
  </span>
);

const Description = ({ summary }: any) => (
  <div className="font-['Helvetica'] text-[#d5d5d5] w-full" id="SixYoungSometh">
    {summary.replace(/<[^>]*>?/gm, "")}
  </div>
);
