import { useNavigate, useParams } from "react-router-dom";
import { Logo } from "../../components/logo";
import { SearchDefault } from "../../components/search";
import { useEffect, useState } from "react";
import { searchShows } from "../../api";
import { SearchItem } from "./search-item";
import { Container } from "../../layouts/container";

export default function SearchPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await searchShows(id);
          setShows(data);
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

  const onClickShow = (name: string) => {
    navigate(`/detail/${name}`);
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
        <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-x-4 gap-x-4 gap-y-4 xl:w-full">
          {shows.map((show: any, index: number) => (
            <SearchItem
              key={show.show.id}
              data={show}
              onClickShow={onClickShow}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
