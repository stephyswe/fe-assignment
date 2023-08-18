import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchDefault } from "../components/search";
import { Container } from "../layouts/container";
import { Logo } from "../components/logo";

export default function LandingPage() {
  const navigate = useNavigate();

  function onSearch(searchParams: string) {
    navigate(`/search/${searchParams}`);
  }

  return (
    <Container>
      <div className="container-landing" id="StartMobileRoot">
        <Logo />
        <div className="landing-search">
          <SearchDefault onSearch={onSearch} />
        </div>
      </div>
    </Container>
  );
}
