import styled from "styled-components";
import image from "../../image/bannerback.avif";

export const Navbar = styled.div`
  height: 500px;

  background-color: #3533cd;
  background-image: linear-gradient(245deg, #3533cd 0%, #000000 100%);

  .laltain {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  @media (max-width: 768px) {
    height: 100vh;
    overflow-x: hidden;
  }
  .mmtlogo {
    position: absolute;
    left: 70px;
    top: 10px;
    width: 8%;
  }
  .topdiv {
    padding-top: 20px;
    height: 70px;
    display: flex;
    gap: 10px;
    flex-direction: row-reverse;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
